const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // inserir coisas no array
console.log(valores)

console.log(valores.pop()) // remover ultimo item do array

delete valores[0] // deixar o espaço vazio

console.log(valores)