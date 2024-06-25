// leitura, conversão da string para numero e atribuição (estapas de dentro para fora)
let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))
let media = (nota1 + nota2 + nota3)/ 3

media = (nota1 + nota2 * 2 + nota3)/ 4
alert('A média das notas inseridas é ' + media)