//destructuring de funcao

function rand({min=0, max=1000}) {
    const valor= math.random() * (max-min)+min
    return Math.floor(valor)
} //dps de rand foi determinado um padrao a se seguir

const obj = { max: 50, min:40} //substituir o padrao por um obj
console.log(rand(obj))

console.log(rand({min: 955})) //mudando so o min

console.log(rand({})) // vai usar o padrao
// console.log(rand()) vai dar erro n esta desestruturando nada