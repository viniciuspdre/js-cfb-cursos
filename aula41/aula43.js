const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const caixaCursos = document.querySelector('#caixaCursos')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
let nomeCurso = document.querySelector('#nomeCurso')
const btnAdicionarNovoCurso = document.querySelector('#btnAdicionarNovoCurso')
const btnAdicionarAntes = document.querySelector('#btnAdicionarAntes')
const btnAdicionarDepois = document.querySelector('#btnAdicionarDepois')

let indice = 0

const tiraSelecao = () => {
    cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el) => {
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')
    novoElemento.addEventListener('click', (evt) => {
        tiraSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}
cursos.map((e) => {
    const novoElemento = criarNovoCurso(e)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const opcaoSelecionado = () => {
    cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', ((evt) => {
    try {
        alert('O curso selecionado foi: ' + opcaoSelecionado().innerHTML)
    }catch(err){
        alert('Selecione um curso!')
    }
}))

btnRemoverCurso.addEventListener('click', ((evt) => {
    try{
        opcaoSelecionado().remove()
    }catch(ex){
        alert('Selecione um curso.')
    }
}))

btnAdicionarAntes.addEventListener('click', (evt) => {
    try {
        // const novoCurso = criarNovoCurso(nomeCurso.value)
        if(nomeCurso.value.length == 0){
            alert('[ERRO]Insira um curso!')
        }else{
        caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), opcaoSelecionado())
        }
    }catch(ex){
        alert('Selecione um curso.')
    }
})

btnAdicionarDepois.addEventListener('click', (evt) => {
    try {
        if (nomeCurso.value.length == 0){
            alert('[ERRO]Insira um curso!')
        }else{
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, opcaoSelecionado().nextSibling)
        }
    }catch(ex){
        alert('Selecione um curso.')
    }
})