let btnVermelho = document.getElementsByTagName('button')[0]
let btnVerde = document.getElementsByTagName('button')[1]
let btnAzul= document.getElementsByTagName('button')[2]

let quadro = document.querySelector('.quadro')

function mudarCor(cor){
    quadro.style.background= cor
}

let elementoFilho =  document.createElement('p')

elementoFilho.innerHTML = 'Texto inserido no inner html de um parágrafo cridado com o createElement do objeto document'

let elementoPai = document.querySelector('body')

elementoPai.appendChild(elementoFilho)

let outroElementoFilho = document.createElement('h1')

outroElementoFilho.innerHTML = 'Título cridado com JS'

elementoPai.appendChild(outroElementoFilho)

