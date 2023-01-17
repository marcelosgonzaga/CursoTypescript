// 1 - tipo de objeto para funçções
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(
        `O nome do produto é ${product.name}, seu preço é R$${product.price}`,
    )
    if (product.isAvailable) {
        console.log('Este produto esta disponível!')
    }
}

const shirt: Product = {
    name: 'Camisa',
    price: 29.99,
    isAvailable: true
}
showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 29.99, isAvailable: false})

// 2 -  propriedade opcional em interface
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${ user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1: User = {email: "matheus@email.com", role: "Admin"}
const u2: User = {email: "matheus@email.com"}

showUserDetails(u1)
showUserDetails(u2)


// 3 - readonly

interface Car{
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

//4 - index signature

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// 5 - extending types

interface  Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const goku: SuperHuman = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
}

console.log(goku)


// 6 - intersection types

interface Character {
    name: string
}

interface Gun {
    type: string 
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
}

console.log(arnold)
console.log(arnold.caliber)

//7 readonl array

let myArray: ReadonlyArray<string>= ["Maça", "Laranja","Banana"]

console.log(myArray)

myArray.forEach((item) =>{
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

//8 - tuplas

type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser = ['Marcelo', 30]

anotherUser[1] = 'João'

console.log(anotherUser)

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])



