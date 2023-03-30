var a = 321
{
    var a = 123
    console.log(`dentro do bloco = ${a}`)
}

console.log(`fora do bloco = ${a}`)

function teste(){
    var local=76
    console.log(`dentro da funcao = ${local}`)
}

  teste()
/* console.log(`fora da funcao = ${local}`) */     //vai dar erro, var só funciona dentro da funcao, a nao ser que seja uma variavel global

console.log(`---------------------------`)

let numero = 1
{
    let numero=2
    console.log(`dentro=${numero}`)
}
console.log(`fora=${numero}`)