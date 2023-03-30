function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = `Anonimo`
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome eh ${this.nome}!!`)
} // nao usar funcao arrow pois o this nao sera o mesmo 

obj1.falar()

obj2.nome = `Rafael`
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype  //inserindo heranca de forma direta mas poderia ser Object.setPrototypeOf(obj3, MeuObjeto)
obj3.nome = `Obj3`
obj3.falar()

//Resumo e curiosidades
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // sera nulo pois o object.proto nao herda ninguem, nao sera undefined!!!