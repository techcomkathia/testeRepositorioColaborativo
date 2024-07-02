
function somarNumerosIntervalo(inicio=0, final=0){
    let soma = 0

    for(let i=inicio; i<=final; i++){
        soma += i
    }

    return soma
}

let soma1a100 = somarNumerosIntervalo(1,100)
console.log(soma1a100)

console.log(somarNumerosIntervalo(2,4))