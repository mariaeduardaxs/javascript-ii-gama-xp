const alunasGama = ["Paula", "Maria", "Estela", "Clara"] //conjunto de informações que começa do zero

//Acessar informações num array
console.log(alunasGama[3]) //"Clara"

// Operador spread (...)  //espalha infos de array anterior sem alterá-lo e podemos atribuí-lo a um novo array  
const alunasXp = [...alunasGama, "Simara"] // coloca todas as alunas da lista + 1 nova que não estava nos colchetes

console.log(alunasXp)

//Metodos de iteração

// geralmente é feito com for

//for (let i = 0; i < alunasXp.length; i++) {
//    console.log(alunasXp[i])
// }
    
//Map
alunasXp.map(aluna => console.log(aluna)) //dentro do map tem uma função callback, coloco uma arrow function - peço para imprimir cada aluna, ao invés de fazer for

//

//Filter - é uma forma de receber um novo array com as informações filtradas
const numeros = [34, 45, 67, 90, 55, 76] // isso é um array

const numerosImpares = numeros.filter(numero => numero%2 !=0) // numeros.filter(numero => numero%2 !=0) são os números ímpares
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 ==0) //numeros.filter(numero => numero%2 ==0) são os números pares
console.log(numerosPares) //consigo fazer as coisas sem usar if, if else, nem for


const produtos = ["geladeira", "fogao", "cama", "mesa"]

//find

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)

//sort - ordenação de arrays

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a) //não retorna um novo array, altera array original
console.log(numerosOrdenadosDecrescente)


//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> { //reduce espera uma callback e outras infos
    return valorAnterior + valorAtual
},5) //soma dos numbers + o 5

console.log(soma) //75 - operações mtm considerando todo o array