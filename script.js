'use strict';

// To String

console.log(typeof(String(null)));
console.log(typeof(String(4)));
console.log(String(4));

console.log(typeof( + ''));


const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// TO Number
// 1
console.log(typeof(Number('4')));
// 2
console.log(typeof(+'4'));
// 3
console.log(typeof(parseInt('14px', 10)));
///

let answ = +prompt('Hello', '');

// To boolean
//0,'', null, undefined, NaN; - FALSE
//1
let switcher = null;

if(switcher) {
    console.log('Working...');
}

switcher = 1;

if(switcher) {
    console.log('Working...');
}

//2
console.log(typeof(Boolean('4')));
//3
console.log(typeof(!!'444'));