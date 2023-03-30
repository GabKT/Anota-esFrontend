// proibindo adicao de novos atributos mas pode excluir e alterar os itens

const produto = Object.preventExtensions({
    nome: `Qualquer`, preco: 1.99, tag: `promocao`
})
console.log(`Extensivel:`, Object.isExtensible(produto))

produto.nome = `Borracha`
produto.descricao = `Borracha escolar branca`
delete produto.tag
console.log(produto)

// selar, nao pode adicionar nem excluir mas pode alterar os itens 

const pessoa = { nome: `Juliana`, idade: 35}
Object.seal(pessoa)
console.log(`Selado: `, Object.isSealed(pessoa))

pessoa.sobrenome = `Silva`
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze(pessoa) = selado + valores imutaveis e constantes