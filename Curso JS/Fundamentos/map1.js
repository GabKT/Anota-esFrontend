const nums = [1, 2, 3, 4, 5]

// map = For com proposito 
let resultado = nums.map(function(elementos){
    return elementos*2
})

console.log(resultado)//novo array transformado

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(`.`, `,`)}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)