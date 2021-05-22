"use strict"

// class MyClass {
//     constructor() {}
//     method1() {}
//     method2() {}
//     method3() {}
// }

// // 

// class User {
//     constructor(name) {
//         this.name = name
//     }

//     sayHi() {
//         alert(this.name);
//     }
// }

// let user = new User('Mike');
// user.sayHi();  // in User.prototype

// alert(typeof User)  // function
// alert(User === User.prototype.constructor)
// alert(User.prototype.sayHi);
// alert(Object.getOwnPropertyNames(User.prototype));
// //  another 

// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHi = function() {
//     alert(this.name);
// }

// let user = new User("John");
// user.sayHi();

// User() // error
// alert(User); // string representation

// let User = class {
//     sayHi() {
//         alert("hello");
//     }
// }

// let User = class MyClass {
//     sayHi() {
//         alert(MyClass)
//     }
// }

// new User().sayHi();  // MyClass defintion

// alert(MyClass) // error not defined


// function MakeClass(phrase) {
//     return class {
//         sayHi() {
//             alert(phrase);
//         }
//     }
// }

// let User = MakeClass('hello');

// new User.sayHi();

// //

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if(value.length < 4) {
//             alert("name is too short.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User('John');
// alert(user.name);

// user = new User("");

// class User {
//     ['say' + 'Hi']() {
//         alert("hello");
//     }
// }


// new User().sayHi();

// class User  {
//     name = "John";  // in individual object, not prototype

//     sayHi() {
//         alert(`Hello ${this.name}`);
//     }
// }

// new User().sayHi();
// User.prototype.name = undefined

// //
// class User {
//     name = prompt("Name, please");
// }

// let user = new User();
// user.name();

// //

// class Button {
//     constructor(value) {
//         this.value = value;
//     }

//     click() {
//         alert(this.value);
//     }
// }

// let button = new Button();
// setTimeout(button.click, 1000); // undefined
// // setTimeout(() => button.click(), 1000);
// // bind method

// class Button {
//     constructor(value) {
//         this.value = value
//     }

//     click = () => {
//         alert(this.value)
//     }
// }
// setTimeout(button.click, 1000);


// class Clock  {
//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if(hours < 10 ) hours =  `0` +hours;

//         let mins = date.getMinutes();
//         if(mins < 10 ) mins =  `0` +mins

//         let sec = date.getSeconds();
//         if(sec < 10 ) sec =  `0` + sec

//         let output = this.template.replace('h', hours)
//                                    .replace('m', mins)
//                                    .replace('s', sec);

//         console.log(output);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }

// }

// let clock = new Clock({template : 'h:m:s'});
// clock.start();


// // 

class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog('Mitzie');
d.speak();

//

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name} makse a noise`);
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// let d = new Dog('Mitzie');
// d.speak();


// 
// const Animal = {
//     speak() {
//         console.log(`${this.name} maks a noise.`);
//     }
// };

// class Dog {
//     constructor(name) {
//         this.name = name
//     }
// }

// Object.setPrototypeOf(Dog.prototype, Animal);

// let d = new Dog('Mitzie');
// d.speak();

// ###

class MyArray extends Array {
    static get [Symbol.species]() {return Array;}
}

let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x* x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);  // ture


class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}

let l = new Lion('Fuzzy');
l.speak();

let calculatorMixin = Base => class extends Base {
    calc() {}
};

let randomizerMixin = Base => class extends Base {
    radomize() {}
}

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(foo)) {}