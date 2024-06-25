// Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20%

let salario = prompt('Digite o seu salário (apenas os números)')

let novoSalario = salario * 1.2 

//reatribuir 
salario *= 1.2

alert('Seu novo salário é R$' + salario)
console.log(`Seu novo salário é ${salario}`)