interface IObEvent<T = any> {
    type: string | symbol
    target?: T
}

interface IObHandler<T = any> {
    (event: IObEvent<T>): any
}

interface IObserver {
    addHandler(type: string | symbol, handler: IObHandler<IObserver>): void
    removeHandler(type: string | symbol, handler: IObHandler<IObserver>): void
    fire(event: IObEvent<IObserver>): void
}

class Observer implements IObserver {

    private handlers = new Map<string | symbol, Set<IObHandler<Observer>>>()

    addHandler(type: string | symbol, handler: IObHandler<Observer>): void {
        if (this.handlers.has(type)) {
            this.handlers.get(type).add(handler)
        } else {
            this.handlers.set(type, new Set([handler]))
        }
    }
    removeHandler(type: string | symbol, handler: IObHandler<Observer>): void {
        if (this.handlers.has(type)) {
            this.handlers.get(type).delete(handler)
        }
    }
    fire(event: IObEvent<Observer>): void {
        const { type, target = this } = event
        event.target = target
        if (this.handlers.has(type)) {
            this.handlers.get(type).forEach(handler => {
                handler.call(null, event)
            })
        }
    }
}