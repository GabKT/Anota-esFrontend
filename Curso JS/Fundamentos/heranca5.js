console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split(``).reverse().join(``) //quebrar string em array(split) e inverter ela(reverse) e montar uma string dnv (join)
}

console.log(`Escola Cod3r`.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())

//tomar cuidado ao montar ou substituir funcoes em functions(string,array, object), se possivel nunca substituir