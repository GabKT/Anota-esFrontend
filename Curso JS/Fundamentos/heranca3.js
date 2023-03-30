const pai = { nome: `Pedro`, corCabelo: `preto`}

const filha1 = Object.create(pai) // usando pai de prototipo para criacao da filha
filha1.nome = `Ana`
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: `Bia`, writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = `Carla`
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //nao ira listar os atributos herdados
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
    console.log(`Sua propriedade: ${key}`) : console.log(`Propriedade por heranca: ${key}`)
} //hasOwnProperty o atributo(key definido por for in) pertence ao obj = true, senao = false