//beneficios sob tempo de empresa
let nome = prompt('Digite seu nome')
let tempoDeEmpresa = Number(prompt('Digite seu tempo de empresa em total de anos'))
let opcaoTempoEmpresa = Number(prompt('Digite a opção que está relacionada ao seu tempo de empresa> \n 1 - menos de um ano \n 2- Entre 1 e 2 anos \n 3- Entre 2 e 5 anos \n 4- Entre 5 e 10 anos \n 5- Mais de 10 anos'))
let qtdDepMenor7 = Number(prompt('Digite o número de dependentes MENORES QUE 7 ANOS'))
let salarioBase = 9000.00
// menos de 1 ano --------- 0% sob o salario base
//ENTRE 1 e 2 anos ---------5% sob o salario base
//de 2 a 5 anos ----------- 10% sob o salario base
//de 5 a 10 anos ---------- 15% sob o salario base
//mais de 10 anos --------- 20% sob o salario base

let bonus1 
// if else 

if (tempoDeEmpresa<1) {
    bonus1=0
    
}
else if(tempoDeEmpresa>=1 && tempoDeEmpresa<=2){
    bonus1= salarioBase*0.05
}
else if(tempoDeEmpresa>2 && tempoDeEmpresa<=5){
    bonus1 = salarioBase*0.1
}
else if(tempoDeEmpresa>5 && tempoDeEmpresa<=10){
    bonus1 = salarioBase*0.15
}
else if(tempoDeEmpresa>10){
    bonus1= salarioBase*0.2
}
else {
    bonus1 = 0
}

let bonus2
switch(opcaoTempoEmpresa){
  case 1 :
    bonus2 = 0
    break
  case 2 :
    bonus2 = salarioBase*0.05
    break
  case 3 :
    bonus2 = salarioBase*0.1
    break
  case 4 :
    bonus2 = salarioBase*0.15
    break
  case 5 :
    bonus2 = salarioBase*0.20
    break
  default:
    bonus2 = 0
    alert('O texto inserido no campo de bonificação não é apenas numérico')
    break
}

let bonusDepedente = qtdDepMenor7 * 500

//benefício por dependente
// R$ 500,00 por dependente menor que 7 anos
let VA = 1000
let VB = 200
// VA ---------------- R$ 1000,00
// VT ---------------- R$ 200,00

//DESCONTOS
let INSS = salarioBase * 0.09
let FGTS = salarioBase * 0.08
// INSS ---------------------- 9% do salário base
// FGTS ---------------------- 8% do salário base

//com base nos critérios, ler as informações de um empregado e exibir na tela o total a receber descrevendo cada um dos custos, tanto benfícios quanto descontos, por categoria.
let salarioLiquido = salarioBase + (salarioBase * bonus1) + bonusDepedente  + VA + VT - INSS - FGTS

document.write(`
                Apontamentos Folha de Pagamento <br>
                <ul>
                    <li>Nome: ${nome} </li>
                    <li>Salario Base: ${salarioBase} </li>
                    <li>Bônus por tempo de serviço: ${salarioBase * bonus1} </li>
                    <li>Auxílio Creche: ${bonusDepedente} </li>
                    <li>Vale Transporte: ${VT} </li>
                    <li>Vale Alimentação: ${VA} </li>
                    <li>Desconto INSS: ${INSS} </li>
                    <li>Desconto FGTS: ${FGTS} </li>
                    <li>Total a Receber: ${salarioLiquido.toFixed(2)} </li>
                </ul>
            `)

