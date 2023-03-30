const pilotos = [`Vettel`, `Alonso`, `Raikkonen`, `Massa`]
pilotos.pop() // remove ultimo elemento do array
console.log(pilotos)

pilotos.push(`Verstappen`) // add o elemento na ultima posicao
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log((pilotos))

pilotos.unshift(`Hamilton`) // add no inicio
console.log(pilotos)

//splice adiciona e remove // (2,0, `Massa`) vou trabalhar a partir do indice 2, irei remover 0 elementos a partir desse indice e vou adicionar o Massa no indice selecionado
pilotos.splice(2,0,`Massa`)
console.log(pilotos)

pilotos.splice(2,1)//removendo
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir de x indice (inclui o [x] no array)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)