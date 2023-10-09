'use strict';

const arr = [15,11,1,2,3,4,5,6,8,33,29];
arr.sort();
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});


// arr[99] = 0;
// console.log(arr.length); // метод ленг показывать последний индекс +1
// console.log(arr); // из-за того что мы поставили "0" 
// на 99 место в индексе между последним числом и "0" образовались
// 92 пустые ячейки и метод ленг выдаст 100.


// arr.pop(); // удалить последний элемент массива
// arr.push(10); // добавить в конец массива 
// console.log(arr);

// for (let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// };

for (let value of arr) {
    console.log(value);
};

const str = prompt('', '');
const products = str.split(", ");
products.sort();
console.log(products.join('; '));


