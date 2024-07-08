let funcionarios = [
    {
        nome:'ana',
        cargo:'atendente',
        salario: 2000.00,
        gratificacao: 500.00,
        idade:22
    },
    {
        nome:'Paula',
        cargo:'contadora',
        salario: 4500.00,
        gratificacao: 500.00,
        idade:52
    },
    {
        nome:'Ricardo',
        cargo:'operacional',
        salario: 2500.00,
        gratificacao: 500.00,
        idade:31
    },
    {
        nome:'João',
        cargo:'gerente',
        salario: 9500.00,
        gratificacao: 500.00,
        idade:38
    },
    {
        nome:'Regina',
        cargo:'estagiária',
        salario: 1000.00,
        gratificacao: 100.00,
        idade:17
    }

]

//1) Mostre no console o nome da pessoa e quanto ela recebe em um texto formatado, para todos os itens do array, com uma string formatada.

funcionarios.forEach((item)=> console.log(`${item.nome} recebe R$ ${(item.gratificacao + item.salario)} de salário e bonificação`))


// 2)Para o mesmo array de objetos pessoas, crie um novo array, com apenas os valores das gratificações

let gratificacoes = funcionarios.map((item)=>item.gratificacao)

// 3)Utilizando o map, crie uma função que retorna um array, com os valores dobrados do array de gratificações.
let gratificacaoDobro = gratificacoes.map((item)=> item * 2)

// 4) Crie um array com as pessoas (objeto) que recebem mais que 4mil reais de salario.

let salariosSup4k =  funcionarios.filter((item)=>{
    if(item.salario>4000){
        return item
    }
})

// 5) Crie um array com as pessoas (objeto) que têm mais de 20 anos.

let maiores20anos = funcionarios.filter((pessoa)=>{
    if(pessoa.idade>20){
        return pessoa
    }
})

// 6) Exiba o valor total das gratificações. Utilize reduce. 

let totalGratificacoes = funcionarios.reduce((total, funcionario)=> {
    total += funcionario.gratificacao
    return total
},0)