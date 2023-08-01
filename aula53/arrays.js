let x = document.querySelector('#n1')
let y = document.querySelector('#n2')
let soma = document.querySelector('#soma')
let sub = document.querySelector('#sub')
let mult = document.querySelector('#mult')
let div = document.querySelector('#div')
let result = document.querySelector('#resultado')

const op = [
    (n1, n2)=>{
        let res = Number(n1) + Number(n2)        
        result.innerHTML = res
    },
    (n1, n2)=>{
        let res = n1 - n2
        result.innerHTML = res
    },
    (n1, n2)=>{
        let res = n1 * n2
        result.innerHTML = res
    },
    (n1, n2)=>{
        let res = n1 / n2
        result.innerHTML = res
    } 
]

soma.addEventListener('click', function(){op[0](x.value, y.value)})
sub.addEventListener('click', function(){op[1](x.value, y.value)})
mult.addEventListener('click', function(){op[2](x.value, y.value)})
div.addEventListener('click', function(){op[3](x.value, y.value)})