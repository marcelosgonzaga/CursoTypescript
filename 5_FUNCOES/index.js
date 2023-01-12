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
