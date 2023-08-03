let caixa = document.querySelector('#caixa')

let musicas = new Set(['De lá', 'Sobrevivendo ao Inferno', 'musica10'])

musicas.add('Mar')
musicas.delete('musica10')

console.log(musicas)

// musicas.forEach((e) => {
//     caixa.innerHTML += e + '<br>'
// })

for(let m of musicas) {
    caixa.innerHTML += m + '<br>'
}