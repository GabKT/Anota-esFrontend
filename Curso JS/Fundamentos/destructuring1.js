//novo recurso do ES2015
// destructuring de objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //tirando nome e idade do objeto e transformando em uma variavel fora do objeto

console.log(nome, idade)

const {nome: n, idade: i} =pessoa
console.log(n,i)

const {sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
console.log(pessoa.idade)





