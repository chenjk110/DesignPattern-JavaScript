var FruitFactory = require('./Factory');

/* create a fruit instance with FruitFactory */
var frt1 = FruitFactory('apple');
var frt2 = FruitFactory('orange');

console.log(frt1)
/* Apple { name: 'apple', color: 'red' } */
console.log(frt2)
/* Orange { name: 'orange', color: 'orange' } */
