const pessoa = {
    nome: `Rebeca`,
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) 
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //chave+valor



//////////////////////////////////////////////////
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

console.log(`--------------------------------------`)

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})
///////////////////////////////////////////////////




Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,        //tipo freeze
    value: '01/01/2000'
})

pessoa.dataNascimento = '01/01/2004'
console.log(pessoa.dataNascimento)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) //colocar o1 e o2 em dest (atributos iguais sao sobreescritos)

Object.freeze(obj)
obj.c = 1234
console.log(obj)