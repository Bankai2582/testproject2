'use strict';

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);


const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // ссылка 

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy1(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy1(numbers);

// newNumbers.a = 10;
// newNumbers.c.y = 10;


// console.log(numbers);
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 125;
console.log(add);
console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();

newArr[1] = 'aasdad';
console.log(newArr);
console.log(oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

const num = [2,7,6];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];

newArray[1] = 'asd';

console.log(array);
console.log(newArray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

newObj.one = 5;
console.log(q);
console.log(newObj);
// console.log