// O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura)². Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
// Abaixo de 18,5: Abaixo do peso
// Entre 18,5 e 25: Peso normal
// Entre 25 e 30: Acima do peso
// Acima de 30: Obeso

let peso = Number(prompt('Digite seu peso em kg'))
let altura = Number(prompt('Digite seu altura em m'))

let IMC = peso / (altura**2)
console.log(IMC)

if(isNaN(IMC)){
    console.log('Algum dos valores pedidos foi informado como texto')
}
else if( IMC < 18.5){
    // console.log(IMC)
    console.log('Abaixo do peso esperado')
}
// Entre 18,5 e 25: Peso normal
else if(IMC >= 18.5 && IMC< 25){
    // console.log(IMC)
    console.log('Peso Normal')
}
// Entre 25 e 30: Acima do peso
else if (IMC >= 25 && IMC<30){
    // console.log(IMC)
    console.log('Acima do Peso')
}
// Acima de 30: Obeso
else{
    // console.log(IMC)
    console.log('Obeso')
}