// 1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(["teste"]))
console.log(showData(true))

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myobj = {name: "Porta", cor: "Branca"}
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0}

console.log(showProductName(myobj))
console.log(showProductName(otherProduct))

//3 - generics com interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen: Pen = {name: "Caneta BIC", wheels: false, engine:false, color: "azul"}


console.log(myCar)
console.log(myPen)

// 4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${[key]} esta presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB',
}

console.log(getSomeKey(server, 'ram'))


// 5 - keyof type operator

type Character = { name: string; age: number; hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: 'Marcelo',
    age: 40,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))

// 6 - typeof type operator

const userName: string = "Marcelo"

const userName2: typeof userName = "João"

type x = typeof userName

const userName4: x = "Joaquim"

// 7 - indexed access types
type Truck = {km: number; kg: number; description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000, 
    kg: 5000,
    description: 'Caminhão para pouca carga',
}

function showTruckKm(km: Km) {
    console.log(`O caminhão já rodou ${km} kms`)
}
showTruckKm(newTruck.km)

// 8 - conditional types

interface A {}

interface  B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar:myType = 5

type myTypeB = Teste extends { showNmber(): number } ? string : boolean

// 9 - template literals type

type testeA = "text"
 
type CustomType = `some ${testeA}`

const testing: CustomType = "some text"



type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`




