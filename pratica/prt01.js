// let x = function conversor(temp) {
//     let tempc = (temp - 32)*(5/9)
//     return tempc
// }

// console.log(x(54))

// let y = function potencia(valor) {
//     let res = valor ** 3
//     return res
// }

// console.log(y(5))

// let z = function(h, b) {
//     let area = (h * b)/2
//     return area
// }

// console.log(z(5, 4))

// function circ(r) {
//     let pi = 3.14159
//     let area =  pi*r**2
//     let perimetro = 2*pi*r
    
//     return 'Área: ' + area + ' | Perímetro: ' + perimetro
// }

// console.log(circ(5))

// function contaTexto(texto) {
//     let cont = 0
//     text = texto.toLowerCase()

//     for(let i = 0; i < texto.length; i++){
//         if(texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i' || texto.charAt(i) == 'o' || texto.charAt(i) == 'u') {
//             cont++
//         }
//     }
//     return cont
// }

// console.log(contaTexto('Pedro'))

// function jurosCompostos(c, i, t) {
//     let m = c*(1+(i/100))**t
//     return m
// }

// console.log(jurosCompostos(1000, 50, 2))

// function fatorial(valor) {
//     let res = 1
//     let c = 1
//     for (let i = 0; i < valor; valor--) {
//         res *= valor
//     }
//     return res
// }

// console.log(fatorial(5))

// function contador(s, cha) {
//     let c = 0
//     s = s.toLowerCase()
//     for (let i = 0; i < s.length; i++){
//         if(s.charAt(i) == cha) {
//             c++
//         }
//     }
//     return c
// }

// console.log(contador('Cornalhada', 'c'))

function primo(valor) {
    if (valor === 1){
        return 'Número 1 não é primo'
    }else if (valor < 1) {
        return 'Número menores que 1 não são primos'
    }else {
        for (let i = 2; i < valor; i++) {
            if(valor%i == 0) {
                primo = false
                break
            }
        }
    }
    if(primo) {
        return `${valor} é um número primo`
    }else {
        return `${valor} não é um número primo`
    }
}

console.log(primo(13))