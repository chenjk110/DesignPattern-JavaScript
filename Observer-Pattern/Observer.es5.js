var Observer = (function () {

    var Observer = typeof Observer === 'function'
        ? Observer
        : function Observer() {
            this.handlers = Object.create(null)
        }

    Observer.prototype = Object.freeze({
        constructor: Observer,
        addHandler: function (type, handler) {
            var handlers = this.handlers[type] || (this.handlers[type] = [])
            handlers.push(handler)
        },
        removeHandler: function (type, handler) {
            var handlers = this.handlers[type]
            if (Array.isArray(handlers)) {
                for (var i = 0, len = handlers.length; i < len; i++) {
                    if (handlers[i] === handler) {
                        handlers.splice(i, 1)
                        break
                    }
                }
            }
        },
        fire: function (event) {
            if (!event.target) {
                event.target = this
            }
            var handlers = this.handlers[event.type]
            if (Array.isArray(handlers)) {
                var handlers = this.handlers[event.type]
                for (var i = 0, len = handlers.length; i < len; i++) {
                    handlers[i](event)
                }
            }
        }
    })

    return Object.freeze(Observer)
})()

module.exports = Observer;
