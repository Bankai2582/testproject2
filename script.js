'use strict';

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const solder = {
    health: 400,
    armor: 50,
    seyHello: function() {console.log('Hello!');}
};

const John = Object.create(solder);

// const John = {
//     health: 100
// };

// John.__proto__ = solder;

// console.log(John.armor);

// Object.setPrototypeOf(John, solder);
John.seyHello();



// console.log