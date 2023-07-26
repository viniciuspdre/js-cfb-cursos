const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const caixaCursos = document.querySelector('#caixaCursos')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
let nomeCurso = document.querySelector('#nomeCurso')
const btnAdicionarNovoCurso = document.querySelector('#btnAdicionarNovoCurso')

cursos.map((e, i) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute('id', 'c'+i)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = e

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_cursos')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)
})

const opcaoSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadios.filter((e) => {
        return e.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click', ((evt) => {
    const radioSelecionado = opcaoSelecionado()
    if (radioSelecionado!=undefined) {
        const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert('Curso selecionado: ' + cursoSelecionado)
    }else{
        alert('Selecione um curso.')
    }
}))

btnRemoverCurso.addEventListener('click', ((evt) => {
    const radioSelecionado = opcaoSelecionado()
    try{
        const cursoSelecionado = radioSelecionado.parentNode.parentNode
        cursoSelecionado.remove()
    }catch(ex){
        alert('Selecione um curso.')
    }
}))

btnAdicionarNovoCurso.addEventListener('click' ((evt) => {

}))