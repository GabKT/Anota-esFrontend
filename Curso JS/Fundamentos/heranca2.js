// Cadeia de prototipos(heranca) (prototype chain)

Object.prototype.attr0 = `Z` // avo aponta para obj.proto// nao recomendado add atributos a este proto

const avo = {attr1: `A`}
const pai = {__proto__:avo, attr2: `B`, attr4: `3`}  // __proto__ insere heranca
const filho = {__proto__: pai, attr3: `C`, attr4: `0`}


console.log(filho.attr1, filho.attr0, filho.attr4, filho.attr5)



const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <=this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: `F40`,
    velMax: 324 //shadowing (ligacao com carro)
}

const volvo = {
    modelo: `V40`,
    status(){
        return `${this.modelo}: ${super.status()}` //super para referenciar o proto pai
    }
}

Object.setPrototypeOf(ferrari, carro) //relacao de prototipo (heranca)(filho, pai)
Object.setPrototypeOf(volvo, carro) //pode setar diretamente atraves de __proto__ ou desta forma (__proto__ eh mais recente)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())