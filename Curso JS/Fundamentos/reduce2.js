const alunos = [
    {nome: `Joao`, nota: 7.3, bolsista: false},
    {nome: `Maria`, nota: 9.2, bolsista: true},
    {nome: `Pedro`, nota: 9.8, bolsista: false},
    {nome: `Ana`, nota: 8.7, bolsista: true}
]

//Todos os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Algum aluno eh bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))