const filmes = [
    { 
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentario sobre tecnologia.",
        duracao: 120
    },
    { 
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror legal demais.",
        duracao: 120
    },
    { 
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspense bem legal.",
        duracao: 120
    },
]

const [{id, titulo, descricao, duracao}]  = filmes //desestruturando um array de objetos

filmes.map(filme => console.log(filme.descricao)) //como iterar um array sem usar for

//const filmes é um array de objetos que tem 3 objetos

//parece um json - tipo de doc que o backend manda

