//4 operações básicas em função, com dois parâmetros obrigatórios

// função calculadora que recebe dois números e uma função como parâmetro e mostra o retorno da função no alert para o usuário

function somar(n1, n2){
    return n1 + n2
}
function subtrair(n1, n2){
    return n1 - n2
}
function multiplicar(n1, n2){
    return n1 * n2
}
function dividir(n1, n2){
    if(n2!=0){
        return n1 / n2
    }
    else{
        return('divisão impossível, divisor informado é igual a 0')
    }    
}

function calculadora(n1, n2, operacao){
    let funcao = eval(operacao)
    let resultado = funcao(n1, n2)
    alert(resultado)
    // alert(operacao(n1, n2))
}

let num1 = Number(prompt('Digite um número'))
let num2 =Number(prompt('Digite outro número'))
let resultado = somar(1,1)
let opcao = prompt('Digite o nome da operação: \n  somar \n  subtrair \n  multiplicar \n  dividir')

calculadora(num1, num2, opcao)

// function calculadora(num1, num2, opcao){
//     switch (opcao) {
//         case '+':
//             resultado = num1 + num2
//             console.log(resultado)
//             break
//         case '-':
//             resultado = num1 - num2
//             console.log(resultado)
//             break
//         case '*':
//             resultado = num1 * num2
//             console.log(resultado)
//             break
//         case '/':
//             if(num2 != 0){
//                 resultado = num1 / num2
//                 console.log(resultado)  
//             }
//             else{
//                 resultado= 'nao é possivel divisão por 0'
//                 console.log(resultado)
//             }
//             break
    
//         default:
//             console.log('Não há suporte para operação escolhida')
//             break;
//     }
    
// }
