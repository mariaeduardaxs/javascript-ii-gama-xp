// if...else

// if (idade >= 18) { //teste lógico que precisa ser verdadeiro para retornar a condição
//     return 'Maior de idade'
// } else {
//     return 'Menor de idade'
// }

// idade >= 18 ? 'Maior de idade': 'Menor de idade' // forma resumida do condicional : 1 o que está dentro do if, depois tudo que é verdadeiro e depois tudo que é falso

function calculaIdade(idade) {
    return idade >= 18 ? 'Maior de idade': 'Menor de idade'
}
console.log(calculaIdade(15))

// essa é outra forma de escrver a mesma coisa
// if (idade >= 18) { 
//     return 'Maior de idade'
// } else {
//     return 'Menor de idade'
// }
// console.log(calculaIdade(19))