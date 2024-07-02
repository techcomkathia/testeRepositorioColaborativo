
let  fila = ['Ana', 'Júlia', 'Maria', 'Samira', 'Mário', 'Pedro', 'Paulo', 'Cleitinho', 'Grethen', 'Clodovil']

let ultimosAtendidos = []
let atendimentoAmanha = []

//3 pessoas serão atendidas
for(let i = 1; i<=3; i++){
    let ultimo = fila.shift() //remove a primeira pessoa da fila
    ultimosAtendidos.unshift(ultimo) //adiciona a pessoa removida no início da fila de atendidos
}

let novoTamanhoFila = fila.length //7
//demais serão colocadas na fila para o próximo dia

for(let i = 1; i<=novoTamanhoFila; i++){
    let proximo = fila.shift()
    atendimentoAmanha.push(proximo)
}


let numeros = [1,2,3]

function multiplicar(num){
    return num**2
}
function imprimir(){
    console.log('OI')
}

let numerosAoQuadrado = numeros.map(imprimir)

console.log(numeros)
console.log(numerosAoQuadrado)