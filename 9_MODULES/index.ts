//(3) 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet();

// 2 - importação de variavel

import { x } from "./variable";

console.log(x);

//3 - multiplas importações

import { a, b, myfunction } from "./multiple";

console.log(a);
console.log(b);

myfunction();

// 4 - alias

import { someName as name } from "./changename";

console.log(name);


// 5 import all

import * as myNumbers from "./numbers";

console.log(myNumbers);

const nx = myNumbers.n2;

console.log(nx);

myNumbers.showNumber();

// 6 - importando tipos

import { Human } from "./mytype.js";

class User implements Human {
    name; 
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new User("João" , 24)

console.log(joao)