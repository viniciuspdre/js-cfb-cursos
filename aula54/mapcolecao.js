let caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'Javascript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('canal', 100)

mapa.delete(1)

let pes = 10
if (mapa.has(pes)) {
    caixa.innerHTML = 'Existe na colecação com o valor: ' + mapa.get(pes)
    caixa.innerHTML += '<br> O tamanho da coleção é: ' + mapa.size
}else {
    caixa.innerHTML = 'A chave NÃO está na coleção'
    caixa.innerHTML += '<br> O tamhno da coleção é: ' + mapa.size
}

mapa.forEach((e, k) => {
    console.log(e + '| CHAVE: ' + k)
})
//caixa.innerHTML += mapa.get('Curso')