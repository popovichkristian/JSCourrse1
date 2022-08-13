// 09 Операторы в JS
'use strict';

console.log('arr' + " - object");
console.log(5 + " - object");
console.log(4 + +"10"); // результат: 14

// Енкримент, декримент
let incr = 10,
    decr = 10;
// incr++; // Postfix 
// decr--;

// ++incr; // Prefix
// --decr;

console.log(++incr); // (+1)
console.log(decr--); // (+0)

console.log(5%2); // % возвращает остаток от деления 2-х чисел (результат 1)

console.log(2*4 == '8'); // оператор сравнения по значению (результат true)
console.log(2*4 != 8); // оператор сравнения по значению, с приставкой НЕ (НЕравно) (результат false)
console.log(2*4 === '8'); // оператор сравнения по значению, типу данных (результат false)
console.log(2*4 !== '8'); // оператор сравнения по значению, типу данных с приставкой НЕ (НЕравно) (результат true)

// Оператор "и" && ; Оператор "или" ||
const isChecked = false,
    isClose = true;
console.log(isChecked && isClose); // false (если выполняются все условия "И это И то...")
console.log(isChecked || isClose); // true (если выполняются хотя бы один из аргументов "это ИЛИ то...")
console.log(isChecked || !isClose); // true (если выполняются хотя бы один из аргументов "это ИЛИ то...") ! - оператор отрицания
