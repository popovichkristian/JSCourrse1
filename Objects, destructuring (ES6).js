
// 020 Объекты, деструктуризация объектов (ES6)
"use strict";

// const obj = new Object(); - устаревший вид обьектов.

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },    
    makeTest: function () {
        console.log('Test')
    }
};

options.makeTest();

const {border, bg} = options.colors; // Деструктуризация
console.log(border);

// console.log(options.name);
// console.log(options['colors']['border']); 

// delete options.name;
// console.log(options);

// Функция переберания обьектов
let counter = 0; //Counter - счетчик элементов обьекта
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
            counter++; 
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
        counter++;
    }
}

// console.log(counter);

console.log(Object.keys(options).length); // Счетчик обьектов - упрощенная версия.