'use strict';


const person = {
   name: 'Alex',
   tel: '+79913123123',
   perant: {
      mom: 'Olga',
      dad: 'Mike'
   }
 
};

const clone = JSON.parse(JSON.stringify(person));
clone.perant.mom = 'Anna';

console.log(clone);
console.log(person);