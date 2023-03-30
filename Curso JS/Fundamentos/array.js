console.log(typeof Array, typeof new Array, typeof [])

// forma funcional mas n recomendavel
let aprovados = new Array(`Bia`, `Carlos`, `Ana`)
console.log(aprovados)

//forma mais utilizada e recomendavel
aprovados = [`Bia`, `Carlos`, `Ana`]
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = `Paulo`
aprovados.push(`Abia`)
console.log(aprovados.length)

aprovados[9] = `Rafael`
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

aprovados.sort() 
console.log(aprovados)

delete aprovados[1]

aprovados = [`Bia`, `Carlos`, `Ana`]
aprovados.splice(1, 0, `Elemento1`, `Elemento2`) 
//splice serve para adicionar elementos a um determinado indice, remover elementos do array 
// splice(indice a trabalhar, excluir quantos elementos a partir do indice dito, para inserir basta colocar o item em '')
console.log(aprovados)