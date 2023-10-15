'use strict';

const btns = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert('CLICK!');
// };

// btn.onclick = function() {
//     alert('SECOND CLICK!');
// };

// btn.addEventListener('click', () => {
//     alert('SECOND CLICK!');
// } );

// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     alert('OUCH!');
//     event.target.remove();
// } );
const overlay = document.querySelector('.overlay');
let i = 0;
const deleteElement = (event) => {
        console.log(event.currentTarget);
        console.log(event.type);
        // i++;
        // if (i == 1) {
        //     btn.removeEventListener('click', deleteElement);
        // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {   
    event.preventDefault();

    console.log(event.target);
});

