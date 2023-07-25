let a = document.querySelector('#a').innerHTML
let b = document.querySelector('#b').innerHTML
let c = document.querySelector('#c').innerHTML

function format(a = 0, b = 0, c = 0) {
    let equacao = document.getElementById('equacaoformat')
    equacao.innerHTML = `${a}x<sup>2</sup>`
}