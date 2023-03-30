// EX1
const nums = (a, b) => {
    console.log(`soma = ${a+b}, subtracao=${a-b}, multiplicacao=${a*b}, divisao=${a/b}`)
}



//EX2

const triangulo = (l1, l2, l3) =>{
    if(l1 == l2 && l2 == l3){
        console.log(`Triangulo Equilatero`)
    }
    else if((l1==l2 && l2!=l3)||(l2==l3 && l3!=l1)||(l3==l1 && l1!=l2)){
        console.log(`Triangulo Isoceles`)
    }
    else if(l1!=l2 && l1!=l3 && l2!=l3){
        console.log(`Triangulo Escaleno`)
    }
    else{
        console.log(`Lados Invalidos`)
    }
}

//EX3

function expoente(base, exp){
    console.log(`Resultado = ${Math.pow(base, exp)}`)
}

//EX4

function divisao(dividendo, divisor){
    console.log(`Divisao = ${dividendo/divisor}, resto = ${dividendo%divisor}`)
}

//EX5

function correcao(nErrado){
    nCerto = `R$ ${nErrado.toFixed(2).toString().replace('.',',')}`
    console.log(nCerto)
}


//EX6

function juros(capital, taxa, tempo){
    let J = capital*taxa*tempo
    mS = capital + J

    let M = capital*(Math.pow((1+taxa),tempo))
    
    console.log(`Juros simples = ${mS}, Juros compostos = ${M}`)

}

//EX7
function bhaskara (a, b, c) {
    let resultados = []
    let delta = (b ** 2) - (4 * a * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
//EX8
//EX20
//EX29 pra cima

