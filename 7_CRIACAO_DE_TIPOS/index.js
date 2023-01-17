"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(["teste"]));
console.log(showData(true));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myobj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(myobj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} esta presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Marcelo',
    age: 40,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
// 6 - typeof type operator
const userName = "Marcelo";
const userName2 = "João";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga',
};
function showTruckKm(km) {
    console.log(`O caminhão já rodou ${km} kms`);
}
showTruckKm(newTruck.km);
const someVar = 5;
const testing = "some text";
