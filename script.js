'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    };
}

User.prototype.exit = function(name) {
    console.log(`User ${this.name} is exit`)
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 33);

ivan.hello();
alex.exit();

// console.log(ivan);
// console.log(alex);