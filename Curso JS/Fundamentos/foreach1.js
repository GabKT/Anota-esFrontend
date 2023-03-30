const aprovados = [`Agatha`, `Aldo`, `Daniel`, `Raquel`]

aprovados.forEach(function(nome, indice){ //x,y,z // x=conteudo 
//y= indice // z=array inteiro
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome=>console.log(nome))