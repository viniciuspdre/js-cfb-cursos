let c1 = document.querySelector('#caixa1')
let c2 = document.querySelector('#caixa2')
let trans = document.querySelector('#transferir')
let cursos = ['Administração', 'Contabilidade', 'Línguas Estrangeiras', 'Perícia Criminal', 'Sexologia']

cursos.map((e, i) => {
    let cursos = document.createElement('div')
    cursos.setAttribute('id', 'n'+i)
    cursos.innerHTML = e
    c1.appendChild(cursos)
    cursos.addEventListener('click', (evt) => {
        cursos.classList.toggle('selecionado')
    })
    trans.addEventListener('click', () => {
        if(!cursos.classList.toggle('selecionado') == true){
            c2.appendChild(cursos)
        }else{
            c1.appendChild(cursos)
        }
    })
})