const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
console.log(fruits.indexOf('strawberry'));
console.log(fruits.indexOf('kiwi'));
console.log(fruits.indexOf('orange'));
console.log(fruits.indexOf('banana'));
fruits[fruits.indexOf('apple')] = 'raspberry';
console.log(fruits[1]);