document.body.style.backgroundColor = "#a4baf6"
const dc1 = document.getElementById('c1')
dc1.style.backgroundColor = '#fff'
dc1.style.borderRadius = '5px'
dc1.style.height = '50px'
dc1.style.width = 'fit-content'
dc1.style.padding = '10px'

console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)
dc1.innerHTML = 'Pedro'

const dc2 = document.getElementById('c2')
dc2.style.backgroundColor = '#fff'
dc2.style.borderRadius = '5px'
dc2.style.height = '50px'
dc2.style.width = 'fit-content'
dc2.style.padding = '10px'
dc2.style.marginTop = '10px'

console.log(dc2)
console.log(dc2.id)
console.log(dc2.innerHTML)
dc2.innerHTML = 'Bruno'

const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')
const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

arrayElementos.map((e) => {
    e.innerHTML = 'teste'
})

console.log(arrayElementos)