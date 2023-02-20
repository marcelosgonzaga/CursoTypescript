//(3) 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!");

    return function (
        target: any,
        propertkey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertkey);
        console.log(descriptor);

    };
}

class myClass {
    @myDecorator()
    testing() {
        console.log("terminando execução do método")
    }

}

const myObj = new myClass();

myObj.testing();

//(4) 2 - multiplos decorators

function a() {
    return function (
        target: any,
        propertkey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou A.");
    }
}

function b() {
    return function (
        target: any,
        propertkey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou B.");
    }
}

function c() {
    return function (
        target: any,
        propertkey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou C.");
    }
}


class MultipleDecorators {
    @a()
    @b()
    @c()
    testing() {
        console.log("Terminando execução");
    }
}

const multiple = new MultipleDecorators();

multiple.testing();


//(5) 3 - class decorator
function classDec(constructor: Function) {
    console.log(constructor.name);
    //intervensão exemplo
    if (constructor.name === "User") {
        console.log("Criando usuários");
    }
}

@classDec
class User {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const marcelo = new User("Marcelo");

console.log(marcelo);

//(6) 4- Method decorator
function numerable(value: boolean) {
    return function (
        target: any,
        propertkey: string,
        descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Machine {
    name;

    constructor(name: string) {
        this.name = name
    }
    @numerable(false)
    showName() {
        return `O numero da maquina é: ${this.name}`
    }
}

const trator = new Machine("trator")

console.log(trator)

//(7) 5 - acessor decorator

class Monster {
    name?;
    age?;//? sem tipo definido

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    @numerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }

    @numerable(true)
    get showAge() {
        return `A idade do monstro: ${this.age}`;
    }
}

const charmander = new Monster("Chamander", 10);

console.log(charmander);

//(8) 6 - propert decorator
// 1  -00001

function formatNumber() {
    return function (target: Object, propertykey: string) {
        let value: string

        const getter = function () {
            return value
        }
        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertykey, {
            set: setter,
            get: getter
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1");

console.log(newItem)

console.log(newItem.id)


//(9) 7 - exemplo real com class decorator

function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
   createdAt?: Date;

    constructor(id: number){
        this.id = id;
    }
}

@createdDate
class Pen {
    id;

    constructor(id: number){
        this.id = id;
    }
}

const newBook = new Book(12);
console.log(newBook)
const pen = new Pen(55);
console.log(pen)

console.log(newBook.createdAt)

//(10) 8 - exemplo real method decorator

function chekiIfUserPosted() {
    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        descriptor.value = function(...args: any[]) {
            if (args[1] === true) {
                console.log("Usuário já postou!")
                return null;
            } else {
                return childFunction.apply(this, args);
            }
        }
        return descriptor;
    };
}
class Post {
    alreadyPosted = false;

    @chekiIfUserPosted()

    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted)
newPost.post("Meu terceiro post!", newPost.alreadyPosted)

// 9 - exemplo real property decorator

function Max(limit: number) {
    return function(target: Object, propertykey: string) {
        let value : string;
        const getter = function() {
            return value;
        };
        const setter = function(newVal: string) {
            if(newVal.length > limit) {
                console.log( `O valor deve ter no máximo ${limit} dígitos.`)
                return
            } else{
                value = newVal;
            }
        };
        Object.defineProperty(target, propertykey, {
            get: getter,
            set: setter
        });
    }
}

class admin {
    @Max(10)
    username;

    constructor(username: string) {
        this.username = username;
    }
}


let pedro = new admin("pedrtoadmin123")
let lee = new admin("Lee")

