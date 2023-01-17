"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, name) {
    console.log('Prerando a saudação!');
    const greet = f(name);
    console.log(greet);
}
preGreeting(greeting, 'Matheus');
preGreeting(greeting, 'João');
// 3 - generic function
function fistElement(arr) {
    return arr[0];
}
console.log(fistElement([1, 2, 3]));
console.log(fistElement([true, false]));
console.log(fistElement([]));
function mergeObjects(obj1, Obj2) {
    return {
        ...obj1,
        ...Obj2
    };
}
const newObj = mergeObjects({ name: 'Matheus' }, { age: 30 });
console.log(newObj);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 2));
console.log(biggestNumber('10', '5'));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["test", "testando"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name},tudo bem?`;
}
console.log(modernGreeting("Matheus"));
console.log(modernGreeting("Pedro", "Dr."));
// 7 -parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 8 - unknown
function doSomeThing(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomeThing([1, 2, 3]);
doSomeThing(5);
// 9 - never
function showErrMessage(msg) {
    throw new Error(msg);
}
// showErrMessage("Algum erro!")
// 10 -Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(4, 456, 3456));
// 11 - destructuring como parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49, 99:  };
console.log(showProductDetails(shirt));
