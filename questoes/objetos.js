


let enderecoArray = ['Rua', 'Bairro', 'Cidade', 'Estado', 'CEP']

for(let i = 0; i<enderecoArray.length; i++){
    console.log(enderecoArray[i])
}

for (let elemento in enderecoArray){
    console.log(elemento)
}

let endereco = { rua: 'Rua', bairro: 'Bairro', cidade: 'Cidade', estado: 'Estado', cep: 'CEP', 1:'coisa' }

console.log(enderecoArray[0])
console.log(endereco.rua)

//crie um objeto chamado pessoa com as propriedades nome, idade, altura e peso

let pessoa = { 
    nome: 'Ana',
    idade: 20,
    altura: 1.70,
    peso: 60,
    calcularIMC: function(){ return pessoa.peso/(pessoa.altura**2) },
    chaves: pessoa.keys,
    tamanhoObjeto: pessoa.length
}

for(let chave of endereco){ 
    console.log(endereco[chave])
}

// console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, altura: ${pessoa.altura}, peso: ${pessoa.peso}`)
// console.log(pessoa)

// pessoa.corFavorita = 'azul'

// delete pessoa.idade

// console.log(pessoa.keys)

let produto = { nome: 'Camiseta', preco: 39.90, cor: 'azul', tamanho: 'M' , disponibilidade : true, calcularDesconto: function(desconto){ return produto.preco*(1-desconto/100)}}

let produto2 = ['Camiseta', 39.90, 'azul', 'M', true]
let produtoComDesconto = produto.calcularDesconto(5)






//crie um array chamado pessoas com 3 objetos pessoa