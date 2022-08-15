'use strict';
const str = 'test';
const arr = [1, 2, 3]

// Основные методы которые используються к строкам.
console.log(str.length);
console.log(arr.length);

console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fru'));

const logg = 'Hello world'
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

// Числовые
const num =  12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));