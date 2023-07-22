const idades = [15, 21, 30, 17, 18, 44, 12, 50]

// const filtroMaior18= (valor) => {
//     if (valor >= 18){
//         return valor
//     }
// }

idades.map((e) => {
    console.log(e)
})

const maior = idades.filter((v) => {
    if(v >= 18) {
        return v
    }
})



console.log(idades)
maior.map((e) => {
    console.log(e)
})