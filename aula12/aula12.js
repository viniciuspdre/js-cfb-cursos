// const jogador = {nome: 'Pedro', energia: 100, vidas: 3, magia: 150}
// const jogador2 = {nome: 'Bruce', energia: 100, vidas: 5, velocidade: 80}
// const jogador3 = {...jogador, ...jogador2}

// console.log(jogador3)

const soma = (v1, v2, v3)=> {
    return v1+v2+v3
}

let valores = [1, 5, 4, 10]

console.log(soma(...valores))