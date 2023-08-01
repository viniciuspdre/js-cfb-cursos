const caixa = document.querySelector('#caixa')
let cores = ['Azul', 'Verde', 'Vermelho', ['claro', 'escuro', 'medio']]
let cursos = ['HTML' , 'CSS', 'Javascript', cores]

// cursos[0] = 'C++'
// console.log(cursos[0])
console.log(cursos[3][3][2])

cursos.push('C++')
cursos.push('Python') //adiciona elemento ao final
//cursos.pop() //retira o último elemento
cursos.unshift('C#') //adiciona o elemento no começo
cursos.shift() //tira o elemento do início

cursos.map((e) => {
   let p = document.createElement('p')
   p.innerHTML = e
   caixa.appendChild(p)
})

// for (let i of cursos) {
//     let p = document.createElement('p')
//     p.innerHTML = i
//     caixa.appendChild(p)
// }