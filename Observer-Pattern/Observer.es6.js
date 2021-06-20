class Observer {

    handlers = new Map()

    addHandler(type, handler) {
        if (this.handlers.has(type)) {
            this.handlers.get(type).add(handler)
        } else {
            this.handlers.set(type, new Set([handler]))
        }
    }
    removeHandler(type, handler) {
        if (this.handlers.has(type)) {
            this.handlers.get(type).delete(handler)
        }
    }

    fire(event = {}) {
        const { type, target = this } = event
        event.target = target
        if (this.handlers.has(type)) {
            this.handlers.get(type).forEach(handler => {
                handler.call(null, event)
            })
        }
    }
}