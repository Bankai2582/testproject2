'use strict';

// const obj = new Object();

const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

option.makeTest();

const {border, bg} = option.colors;
console.log(border);

// console.log(option['colors']['border']);

// delete option.name;

// console.log(option);

// let counter = 0;

// for (let key in option) {
//     if (typeof(option[key]) === 'object') {
//         for (let i in option[key]) {
//             console.log(`Object ${key} Property ${i} his value ${option[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`Property ${key} his value ${option[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

console.log(Object.keys(option).length);