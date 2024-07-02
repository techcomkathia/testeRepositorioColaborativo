
//atributos : senha , agencia, numeroConta, saldo, titular e tipo
//métodos: sacar, depositar, consultarSaldo, fazerEmprestimo

let conta = {
    senha: 1234,
    agencia: 1234,
    numeroConta: 123456,
    saldo: 1000,
    titular: 'Ana',
    tipo: 'PF',
    emprestimo:[],
    sacar: function(valor, senha){
        //verificar se o valor é maior que o saldo
        if(senha == conta.senha){
            if(conta.saldo >= valor){
                conta.saldo -= valor
                console.log('Saque realizado com sucesso')
            }
            else{
                console.log('Saldo insuficiente')
            }
        }
        else{
            console.log('Senha incorreta')
        }
    },
    depositar: function(valor, senha){
        if(senha == conta.senha){
            conta.saldo += valor
            console.log('Depósito realizado com sucesso')
        }
        else{
            console.log('Senha digitada incorretamente')
        }
   
    },
    consultarSaldo: function(senha){
        if(senha == conta.senha){
            console.log(`Saldo: R$ ${conta.saldo}`)
        }else{
            console.log('Senha digitada incorretamente')
        }
    },
    fazerEmprestimo: function(valor,senha){
        if(senha == conta.senha){
            let qtdParcelas = 24
            let juros = 0.02
            let parcela = (valor/qtdParcelas) * (1 + juros)
            conta.saldo += valor
            let informacoesEmprestimo = [valor, qtdParcelas,parcela, juros]
            conta.emprestimo.push(informacoesEmprestimo)
            console.log(`Empréstimo de R$ ${valor} concedido. Saldo atual da conta é ${conta.saldo}`)
        }
        else{
            console.log('Senha digitada errada')
        }     
    }
       
}