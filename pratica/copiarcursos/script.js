const cursos = [...document.querySelectorAll('.curso')]
const mover = document.querySelector('#btn_transferir')
const caixa2 = document.querySelector('#caixa2')
const caixa1 = document.querySelector("#caixa1")
cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const cursoSelecionado = evt.target
        cursoSelecionado.classList.toggle('selecionado')
})})

mover.addEventListener('click', () => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    const naoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    selecionados.map((e) => {
        caixa2.appendChild(e)
    })
    naoSelecionados.map((e) => {
        caixa1.appendChild(e)
    })
})