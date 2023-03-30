/* 
    Funções de strings importantes
*/

const escola = "Cod3r";

console.log(escola.charAt(4)); //mostrando o caracter da casa selecionada no caso 4

console.log(escola.charCodeAt(3)) // pegando o codigo da unicode de acordo com o indice

console.log(escola.indexOf('3'))// existe 3 em "Cod3r"?

console.log(escola.substring(1, 3)) //exibir a string a partir da casa x (no caso 1) podendo ir ate y no caso 3

console.log(escola.replace(3, 'e')) // substituir um caracter por outro

console.log('Ana,Maria,Pedro'.split(',')) //separar qnd tiver x (no caso ',')

