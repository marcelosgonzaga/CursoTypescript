"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//(3) 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertkey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertkey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
//(4) 2 - multiplos decorators
function a() {
    return function (target, propertkey, descriptor) {
        console.log("executou A.");
    };
}
function b() {
    return function (target, propertkey, descriptor) {
        console.log("executou B.");
    };
}
function c() {
    return function (target, propertkey, descriptor) {
        console.log("executou C.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    a(),
    b(),
    c()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
//(5) 3 - class decorator
function classDec(constructor) {
    console.log(constructor.name);
    //intervensão exemplo
    if (constructor.name === "User") {
        console.log("Criando usuários");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const marcelo = new User("Marcelo");
console.log(marcelo);
//(6) 4- Method decorator
function numerable(value) {
    return function (target, propertkey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O numero da maquina é: ${this.name}`;
    }
}
__decorate([
    numerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("trator");
console.log(trator);
//(7) 5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro: ${this.age}`;
    }
}
__decorate([
    numerable(true)
], Monster.prototype, "showName", null);
__decorate([
    numerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Chamander", 10);
console.log(charmander);
//(8) 6 - propert decorator
// 1  -00001
function formatNumber() {
    return function (target, propertykey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertykey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
console.log(newItem.id);
//(9) 7 - exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
console.log(newBook);
const pen = new Pen(55);
console.log(pen);
console.log(newBook.createdAt);
//(10) 8 - exemplo real method decorator
function chekiIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    chekiIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);
newPost.post("Meu terceiro post!", newPost.alreadyPosted);
// 9 - exemplo real property decorator
function Max(limit) {
    return function (target, propertykey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertykey, {
            get: getter,
            set: setter
        });
    };
}
class admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], admin.prototype, "username", void 0);
let pedro = new admin("pedrtoadmin123");
let lee = new admin("Lee");
