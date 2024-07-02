let numUser = prompt()

let numMaior = numUser
let numMenor = numUser
let qtdNumeros = 10

for(let i = 2; i<=qtdNumeros; i++){
    numUser = prompt(`Digite o ${i}º número`)
    
    if(numUser > numMaior){
        numMaior = numUser
    }else if(numUser < numMenor){
        numMenor = numUser
    }
    
}