class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }
    setNome(nome) {
        this.nome = nome
    }
    setIdade(idade) {
        this.idade = idade
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(``)
    }
}

let pessoas = []

const adicionar = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = () => {
    pessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()} <br> Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

adicionar.addEventListener('click', (evt) => {
    res.innerHTML = ""
    const nome = document.querySelector('#f_nome')
    const idade = document.querySelector('#f_idade')
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})