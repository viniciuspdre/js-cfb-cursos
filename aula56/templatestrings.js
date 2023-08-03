let caixa = document.querySelector('#caixa')

// const nome = 'Pedro'
// const curso = 'Javascript'
// const idade = 18
// //const frase = 'Este é o curso de ' + curso + ' que o aluno ' + nome + ' está fazendo.'
// const frase = `Este é o curso de ${curso} que o aluno ${nome} está fazendo que tem ${idade} anos. <br>\nSeja bem vindo!`
// // \n quebra a linha no console

// caixa.innerHTML = frase

const carros = ['Polo', 'Golf', 'T-Cross', 'HRV']
let ul = `<ul>`
carros.map((e) => {
    ul+=`<li>${e}`
})
ul += `</ul>`
caixa.innerHTML = ul