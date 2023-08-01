const p_array = document.querySelector('#array')
const botaoReduzir = document.querySelector('#btnReduzir')
const res = document.querySelector('#resultado')

const elementos_array = [18, 14, 15, 26, 31, 22, 13]
p_array.innerHTML = '[' + elementos_array + ']'

//let ant = []
//let atual = []

// botaoReduzir.addEventListener('click', (evt) => {
//     res.innerHTML = elementos_array.reduce((a, e, i) => {
//         ant.push(a)
//         atual.push(e)
//         return e * a
//     })
//     res.innerHTML += "<br/>" + ant + "<br/>" + atual
// })

botaoReduzir.addEventListener('click', (evt) => {
    res.innerHTML = elementos_array.reduce((a, e, i) => {
        if(e >= 18) {
            return a + e
        }else {
            return a
        }
    }) 
})