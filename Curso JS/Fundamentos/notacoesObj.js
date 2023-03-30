const a = 1
const b = 2
const c = 3

const obj1= {a:a, b:b, c:c}
const obj2= {a, b, c}
console.log(obj1, obj2)

const nomeAttrr = `nota`
const valorAttr = 7.87

const obj3= {}
obj3[nomeAttrr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttrr] : valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //forma antigamente
    },
    funcao2(){
        //forma atual
    }
}
console.log(obj5)