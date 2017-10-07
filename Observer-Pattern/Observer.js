function Observer() {
    this.handlers = {};
}

Observer.prototype = {
    constructor: Observer,
    addHandler: function (type, handler) {
        if (typeof this.handlers[type] == 'undefined') {
            this.handlers[type] = []
        }
        this.handlers[type].push(handler);
    },
    removeHandler: function(type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) break;
            }
            handlers.splice(i, 1);
        }
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    }
}

module.exports = Observer;