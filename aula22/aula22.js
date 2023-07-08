let valor = 0

function add(v) {
    valor += v
}

console.log(valor)
add(10)
console.log(valor)
add(15)
console.log(valor)

function soma(p1 = 0, p2 = 0) {
    let res 
    res = p1 + p2
    return res
}

let resultado_soma = soma(5, 5)

// console.log(resultado_soma)