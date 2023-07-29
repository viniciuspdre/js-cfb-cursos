const p_array = document.querySelector('#array')
const campoPesquisar = document.querySelector('#txt_pesquisar')
const botaoPesquisar = document.querySelector('#btnPesquisar')
const res = document.querySelector('#resultado')

const elementos_array = ['html', 'css', 'javascript']
p_array.innerHTML = '[' + elementos_array + ']'

botaoPesquisar.addEventListener('click', (evt) => {
    res.innerHTML = 'Valor não encontrado'
    const retorno = elementos_array.find((e, i) => {
        if(e.toLowerCase() == campoPesquisar.value.toLowerCase()) {
            res.innerHTML = 'Valor encontrado: ' + e + ', no índice ' + i
            return e
        }
    })
    console.log(retorno)
})