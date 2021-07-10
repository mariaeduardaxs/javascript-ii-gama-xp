// function

function soma(a,b) {
    return a + b
}

console.log(soma(3,5)) //8

//arrow function - como simplificar a escrita da funções

const soma = (num1, num2) => num1 + num2 //expressão depois da seta é o return, precisa abrir bloco de código (escopo) se tiver mais de 1 linha

const sayHello = name => `Hello ${name}` //interpolação é o que está entre crases - função callback

console.log(sayHello('Mari'))