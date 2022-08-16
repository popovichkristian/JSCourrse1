// Массивы и псевдомассивы
'use strict';
const arr = [1, 32, 23, 56, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop(); //pop - удаляет последний элемент в массиве.
// arr.push(10); //push - удаляет последний элемент в массиве.
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри масива ${arr}`)
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));