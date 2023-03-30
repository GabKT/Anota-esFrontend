this.ola = `Fala pessoal`
exports.bemVindo = `Bem vindo ao node!`
module.exports.ateLogo = `Ate o proximo exemplo`

console.log(this === module.exports)
console.log(this === exports)
console.log(exports === module.exports)