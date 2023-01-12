// 1 - arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

//numbers = "teste"

const nomes:  string[] = ["Matheus", "João"]

//nome.push(4)

console.log(nomes[1])

//sintaxe mais antiga para conhecimento

const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

//nums.push(teste)

console.log(nums[0])

//3 - any >deve ser evitado pois aceita qualquer tipagem

const arr1: any = [1, true, [], {nome: "Matheus"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

//4 - parametros tipados

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

// 5 - retorno de função
function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Matheus"))

// 6 - função anonima

setTimeout(function() {
    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    // console.log(sallary)

}, 2000)

// 7 - tipos de objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("x coordinates: " + coord.x)
    console.log("y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

// 8  - props opcionais
function showNumber(a: number, b: number, c?: number) {
    console.log("A: "+ a)
    console.log("B: "+ b)
    if(c) {
        console.log("C: " + c)
    }
}

showNumber(1, 2, 3)
showNumber(5, 4)
//? o interrogaçao indica o C com opcional

// 9 -validando argumento opcional

function advancedGreeting(fistName: string, lastName?: string) {
    
    if(lastName !== undefined) {
        return `Olá, ${fistName} ${lastName}, tudo bem?`
    }

    return `Olá, ${fistName}, tudo bem?`
}

console.log(advancedGreeting("Marcelo", "Gonzaga"))
console.log(advancedGreeting("Silva"))

// 10 - union typee

function showBalance(balance: string | number ) {
    console.log(`o saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [ 1, "teste", true ]

// 11 avançando em union types
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
    return "Usuario não aprovado!"
    }
    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))



// 12 - type alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(123)

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - interface x type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Matheus", age: 30}

console.log(somePerson)

// 15 - literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

// 16 - non null assertioon operators

const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint

let n: bigint

//n = 1

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)