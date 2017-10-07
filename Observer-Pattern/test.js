const Observer = require('./Observer.js');

const ob = new Observer();

function saySthToSb(sth, sb) {
    return function () {
        console.log(sth + ', ' + sb + '.');
    }
}

var helloJack = saySthToSb('Hello', 'Jack');
var goodbyeJack = saySthToSb('Goodbye', 'Jack');
var helloJane = saySthToSb('Hello', 'Jane');

ob.addHandler('Jack', helloJack);
ob.addHandler('Jack', goodbyeJack);
ob.addHandler('Jane', helloJane);

console.log('--------------');

ob.fire({ type: 'Jack' });
ob.fire({ type: 'Jane' });

console.log('--------------');

ob.removeHandler('Jack', goodbyeJack);
ob.fire({ type: 'Jack' });
