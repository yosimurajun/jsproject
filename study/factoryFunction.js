const personFactory = (name, age) => {
    const sayHello = () => console.log('Hello!');
    return {name, age, sayHello}
};

const jeft = personFactory('jeft', 27);

console.log(jeft.name);
jeft.sayHello();
console.log('---------------------------------------');
// private var, func

const factoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`-----${capitalizeString()}`);

    return {printString};
};

const taco = factoryFunction('taco');

// taco.capitalizeString();
taco.printString();
console.log('---------------------------------------');

const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    }
}

const counter = counterCreator();
counter();
counter();
counter();
counter();
console.log('---------------------------------------');

const Player = (name, level) => {
    let health = level * 2;

    const getLevel = () => level;
    const getName = () => name;
    const die = () => {

    }

    const damage = (x) => {
        health -= x;
        if(health <= 0) {
            die();
        } 
    }

    const attack = (enemy) => {
        if(level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`)
        }
        if(level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`)
        }
    }

    return { attack, damage, getLevel, getName}
}
const jimmie = Player('jim', 5);
const badguy = Player('jeff', 10);
jimmie.attack(badguy);

console.log('---------------------------------------');

const Person = (name) => {
    const sayHello = () => console.log(`Hello ${name}`);
    return {sayHello};
}

// const Nerd = (name) => {
//     const {sayHello} = Person(name);
//     const doSomethingNerdy = () => console.log('nerd doing');
//     return {sayHello, doSomethingNerdy}
// }

const Nerd = (name) => {
    const prototype = Person(name);
    const doSomethingNerdy = () => console.log('nerd');
    return Object.assign({},prototype, {doSomethingNerdy});
}

const lisa = Nerd('lee');
lisa.sayHello();
lisa.doSomethingNerdy();


console.log('---------------------------------------');
class Greeter {
    constructor(name) {
        this.name = name || 'John Doe';
    }
    hello () {
        return `constructor class Hello ${this.name}`;
    }
}

const george = new Greeter('George');
const msg = george.hello();
console.log(msg)

function Greet(name) {
    this.name = name || 'John Doe';
}

Greet.prototype.hello = function hello() {
    return `consturctor function Hello ${this.name}`;
}


const george2 = new Greet('George');
const msg2 = george2.hello();
console.log(msg2);

const proto = {
    hello() {
        return `function factory Hello ${this.name}`;
    }
};

const greet3 = (name) => Object.assign(Object.create(proto), {name});
const george3 = greet3('George');
const msg3 = george3.hello();
console.log(msg3);


// more study here !!!! (find Eventts)
// import Events from 'eventemitter3';

// const object = {};
// Object.assign(object, Events.prototype);

// Object.on('event', payload => console.log(payload));
// object.emit('event', 'some data');


/// ---------------------------------------------------
// more study here !!!! (find Mixin)
// factory function this aritcle 
// const modelMixin = Object.assign({
//     attrs: {},
//     set (name, value) {
//         this.attrs[name] = value;

//         this.emit('change', {prop: name, value: value});
//     },

//     get (name) {
//         return this.attrs[name];
//     }
// }, Events.prototype);


// const george = { name: 'george' };
// const model = Object.assign(george, modelMixin);

// model.on('change', data => console.log(data));
// model.set('name', 'Sam');


const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a -b ;
    const mul = (a, b) => a * b;
    const div = (a, b) => a/ b;

    return { add, sub, mul, div}
})();

console.log(calculator.add(3, 5));
console.log(calculator.sub(3, 5));
console.log(calculator.mul(3, 5));

let myModule = (function() {
    'use strict';

    var _privateProperty = 'Hellow World';

    function _privateMethod() {
        console.log(_privateProperty);
    }
    return {
        publicMethod: function() {
            _privateMethod();
        }
        
    }
})();

myModule.publicMethod();
// console.log(myModule._privateProperty);
// myModule._privateMethod();



const documentMock = (() => {
    querySelector: (selector) => ({
        innerHTML: null
    })
})();

const Formatter = (function(doc) {
    let timesRun = 0;
    
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const setTimesRun = () => {
        log('Setting times run');
        ++timesRun;
    }
    const makeUppercase = (text) => {
        log('Making uppercase');
        setTimesRun();
        return text.toUpperCase();
        
    }
    const writeToDom = (selector, message) => {
        doc.querySelector(selector).innerHTML = message;
    }
    return {
        makeUppercase,
        writeToDom,
    }
    
})(document || documentMock);

// Formatter.log('helow');
Formatter.makeUppercase('better');
console.log(Formatter.timesRun);
Formatter.timesRun = 10;
console.log(Formatter.timesRun);
Formatter.writeToDom('#target', 'hi there');