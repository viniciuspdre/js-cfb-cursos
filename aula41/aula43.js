const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const caixaCursos = document.querySelector('#caixaCursos')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
let nomeCurso = document.querySelector('#nomeCurso')
const btnAdicionarNovoCurso = document.querySelector('#btnAdicionarNovoCurso')
const btnAdicionarAntes = document.querySelector('#btnAdicionarAntes')
const btnAdicionarDepois = document.querySelector('#btnAdicionarDepois')

let indice = 0

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_cursos')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    return novoElemento
}
cursos.map((e) => {
    const novoElemento = criarNovoCurso(e)
    caixaCursos.appendChild(novoElemento)
    indice++
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

btnAdicionarAntes.addEventListener('click', (evt) => {
    const radioSelecionado = opcaoSelecionado()
    try {
        const cursoSelecionado = radioSelecionado.parentNode.parentNode
        // const novoCurso = criarNovoCurso(nomeCurso.value)
        if(nomeCurso.value.length == 0){
            alert('[ERRO]Insira um curso!')
        }else{
        caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), cursoSelecionado)
        }
    }catch(ex){
        alert('Selecione um curso.')
    }
})

btnAdicionarDepois.addEventListener('click', (evt) => {
    const radioSelecionado = opcaoSelecionado()
    try {
        const cursoSelecionado = radioSelecionado.parentNode.parentNode.nextSibling
        if (nomeCurso.value.length == 0){
            alert('[ERRO]Insira um curso!')
        }else{
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        }
    }catch(ex){
        alert('Selecione um curso.')
    }
})