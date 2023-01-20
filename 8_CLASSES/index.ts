// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const nome = new User()

console.log(nome)

nome.name = "João"

console.log(nome)

// 2 - constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("Marcelo", 44)

console.log(joao)

// 3 - campo readonly

class Car {
    name
    readonly wheels = 4
    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("Civic")

console.log(fusca)

console.log(fusca.wheels)


// 4 - herança e super
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

class killerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new killerMachine("Interpriser", 4)

console.log(destroyer)


// 5 - métodos

class Dwarf {
    name

    constructor(name: string) {
        this.name = name

    }

    greeting() {
        console.log("Hey Stranger!")
    }
}
const jimmy = new Dwarf("Marcelo")

console.log(jimmy.name)

jimmy.greeting()


// 6 - this

class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
    }
}


const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getter
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const marcelogonzaga = new Person("Marcelo", "Gonzaga")

console.log(marcelogonzaga.fullName)

// 8 - setter

class Coords {
    x!: number
    y!: number


    set fillX(x: number) {
        if (x === 0) {
            return
        }
        this.x = x

        console.log("X inserido com sucessor")
    }
    set fillY(y: number) {
        if (y === 0) {
            return
        }
        this.y = y

        console.log("Y inserido com sucessor")
    }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 6

console.log(myCoords)


// 9 - implements

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string){
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}`
        
    }
}

const myPost = new blogPost("Hello Word")

console.log(myPost.itemTitle())

// 10 - override de métodos

class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Outra coisa!")
    }
}

const myNewClass = new Nova()

myNewClass.someMethod()

// 11 - public

class C {
    public x = 10
}

const cInstance = new C()

console.log(cInstance.x)

// 12 - protected

class D {
    protected x = 11

    protected protectedMethod(){
        console.log("Estou Protegido")
    }
}

class E extends D {
    showX() {
        console.log("X: " + this.x)
    }
    useMethod() {
        this.protectedMethod()
    }
}


class F extends D {

}

const eInstance = new E()

eInstance.showX()

eInstance.useMethod()

const fInstance = new F()

//(8-15) 13 - privete

class PrivetClass {
    private name = "Private"

    showName() {
        console.log(this.name)
    }

    private privateMethod () {
        console.log("Sou privado!")
    }

    showPrivateMethodResult() {
        this.privateMethod()
    }
}

const pClass = new PrivetClass()

pClass.showName()

pClass.showPrivateMethodResult()

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }


//(16) 14 static menbers

class staticMembers {
    static prop = "Teste Static"

    static staticMethod() {
        console.log("Este é um método estático")
    }
}

console.log(staticMembers.prop)

staticMembers.staticMethod()

//(17) 15 generic class
class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first e: ${this.first}`
    }
}

const newItem = new Item("Caixa", "Surpresa")
console.log(newItem.showFirst)

//(18) 16 - parameter properties

class ParameterClass {
    constructor(
        public name: string,
        private qty: number,
        private price: number) {
            this.name = name
            this.qty = qty
            this.price = price
        }

        get showQty() {
            return `Quantidad total: ${this.qty}`
        }
        get showPrice() {
            return `Preço: R$${this.price} cada.`
        }
        get showName() {
            return `O produto é: ${this.name}`
        }
}

const newShirt = new ParameterClass("Camisa", 5, 30.99)

console.log(newShirt.showName)
console.log(newShirt.showQty)
console.log(newShirt.showPrice)

// 17 - class expressions

const myClass = class<T> {
    name
  
    constructor (name: T) {
      this.name = name
    }
  } 
  
  const pessoa = new myClass("Jones")
  
  console.log(pessoa.name)

  // 18 - abstract class

  abstract class AbstractTest {
    abstract showName(): void
  }

//   const newObj = new AbstractTest()

class AbstractExempe extends AbstractTest {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showName() {
        console.log(`O nome é: ${this.name}`)
    }
}

const newObjAbstract = new AbstractExempe("Josias")

newObjAbstract.showName()


// 19 - relacoes entre classes
class Dog {
    name!: string
  }
  
  class Cat {
    name!: string
  }
  
  const doguinho: Dog = new Cat()

  console.log(doguinho)