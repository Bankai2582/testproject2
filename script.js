'use strict';

const box = document.getElementById('box');
// const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');
// hearts.forEach(item => {
//     console.log(item);
// });
// console.log(hearts);
const oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: yellow; width: 600px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i=0; i<hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
})

const div = document.createElement('div');
const text = document.createTextNode('I wam being here');

div.classList.add('black');

// document.querySelector('.wrapper').append(div);

// wrapper.append(div);

wrapper.prepend(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello World</h1>';

