const cursoTodos = [...document.getElementsByClassName('curso')]
const cursoC2 = [...document.getElementsByClassName('c2')]
const cursoC1 = [...document.getElementsByClassName('c1')]
const cursoEspecial = document.getElementsByClassName('curso')[6]

console.log(cursoTodos)
console.log(cursoC1)
console.log(cursoC2)
console.log(cursoEspecial)

cursoC1.map((e) => {
    e.classList.add('destaque')
})