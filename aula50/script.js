const p_array = document.querySelector('#array')
const botaoVerificar = document.querySelector('#btnVerificar')
const res = document.querySelector('#resultado')

const elementos_array = [16, 12 , 10, 17, 15, 13, 11, 19]
p_array.innerHTML = '[' + elementos_array + ']'

botaoVerificar.addEventListener('click', (evt) => {
    const ret = elementos_array.some((e, i) => {
        if(e<18){
            res.innerHTML = 'Array não conforme na posição: ' + i
        }
        return e >= 18
    })
    if(ret) {
        res.innerHTML = 'OK'
    }
    //console.log(ret)
})
