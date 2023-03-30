function tratarErroELancar(erro){
    //throw new Error('error')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const pessoa = {name:'Roberto'}
imprimirNomeGritado(pessoa)

//try vai tentar
//catch caso n de certo vai jogar pro catch 
//finally sempre vai ser executado no final
//jogar um aviso ou qualquer coisa