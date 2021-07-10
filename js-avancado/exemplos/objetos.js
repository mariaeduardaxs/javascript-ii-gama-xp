const pessoa = { //para criar um objeto, uso chaves
    nome: "Simara",
    idade: 32,
    cidade: "São Paulo"
}

//Notação de ponto - dá as infos
console.log(pessoa.nome) //"Simara"

//Notação de colchetes - dentro do colchetes vem a propriedade
console.log(pessoa['idade']) //32

//Como desestruturar Objetos - acesso diretamente a propriedade, não preciso da pessoa para acessar as infos

const { nome, idade, cidade } = pessoa

console.log(nome) //"Simara"
console.log(idade) //32
console.log(cidade) //São Paulo

//forma menos verbosa de acessar as propriedades de um objeto

//concatenação é só de strings

//interpolar pode ser num, string etc.