
//escreva todos os pares de 1 até 100

for (let i = 0; i < 101; i+=2) {
   console.log(i)    
}

let somaNotas
let media 
// aritmética ----> SOMA NOTAS/ QTD NOTAS
for(let i = 1; i<=4; i++){
    somaNotas+= Number(prompt(`Digite a nota nº ${i}`))
}
media = somaNotas / i-1

//ponderada --> (NOTA * PESO)+ (NOTA * PESO) / SOMA PESOS
media = 0
somaNotas = 0 
pesos = 0

for(let i = 1 ; i<=12; i++){
    if (i == 4 || i == 2) {
        somaNotas += (Number(prompt(`Digite a nota nº ${i}`)) * 2)
        pesos+= 2
    }
    else if (i == 3){
        somaNotas += (Number(prompt(`Digite a nota nº ${i}`)) * 3)
        pesos+= 3
    }
     else {
        somaNotas += Number(prompt(`Digite a nota nº ${i}`))
        pesos+= 1
    }    
}

media = somaNotas / pesos