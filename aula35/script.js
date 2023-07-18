const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((e) => {
    e.addEventListener('click',(evt) => {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

btn.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    cursosNaoSelecionados.map((e) => {
        caixa1.appendChild(e)
    })
    cursosSelecionados.map((e) => {
        caixa2.appendChild(e)
    })
    //console.log(cursosSelecionados)
})