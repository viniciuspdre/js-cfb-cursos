const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const caixaCursos = document.querySelector('#caixaCursos')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']

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

const cursoSelecionado = 

btnCursoSelecionado.addEventListener('click', ((evt) => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadios.filter((e, i, a) => {
        return e.checked
    })
    radioSelecionado = radioSelecionado[0]
    // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert('Curso selecionado: ' + cursoSelecionado)
    console.log(radioSelecionado)
    console.log(cursoSelecionado)
}))