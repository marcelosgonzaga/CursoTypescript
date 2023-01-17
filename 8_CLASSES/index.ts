// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const nome = new User()

console.log(nome)

nome.name = "João"

console.log(nome)