const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt) => {
    console.log('clicou')
})

// btn_c1.addEventListener('click', (evt) => {
//     evt.stopPropagation()
// })

function paraPropag(evt) {
    evt.stopPropagation()
}

cursos.map((e) => {
    e.addEventListener('click', paraPropag)
})