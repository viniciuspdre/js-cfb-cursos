const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll(".curso")]
const novoElemento = document.createElement('div')
// novoElemento.innerHTML = 'Node'
// // novoElemento.classList.add('curso', 'c1')
// novoElemento.setAttribute('id', 'c7')
// novoElemento.setAttribute('class', 'curso c1')
// caixa1.appendChild(novoElemento)

const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'Node']
cursos.map((e, i) => {
    const criarELemento = document.createElement('div')
    criarELemento.innerHTML = e
    criarELemento.setAttribute('id', 'c'+i)
    criarELemento.setAttribute('class', 'curso c1')
    const btnLixeira = document.createElement('img')
    btnLixeira.setAttribute('src', 'lix.png')
    btnLixeira.setAttribute('width', '16px')
    btnLixeira.style.cursor = 'pointer'
    criarELemento.appendChild(btnLixeira)
    btnLixeira.addEventListener('click', (evt) => {
        caixa1.removeChild(evt.target.parentNode)
    })
    caixa1.appendChild(criarELemento)
})

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)
//console.log(document.getRootNode())

// if(caixa1.children.length > 0) {
//     console.log('Ele possui filhos')
// }else {
//     console.log('Não possui filhos')
// }

// console.log(btn_c[0].children.length > 0 ? 'Possui Filhos' : 'Não possui filhos')

// // caixa1.firstElementChild.innerHTML = 'Vassoura de palha'
// caixa1.children[1].innerHTML = 'Vassoura de aço'