/* Import Fruit Classes */
var Apple = require('./Apple');
var Orange = require('./Orange');
var Banana = require('./Banana');

/* Export Factory Function */
module.exports = function(type) {
    switch(type) {
        case 'apple': 
            return new Apple();
            break;
        case 'orange':
            return new Orange();
            break;
        case 'banana':
            return new Banana();
            break;
        default: 
            return null;
            break;
    }
}