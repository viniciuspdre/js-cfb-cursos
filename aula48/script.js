const p_array = document.querySelector('#array')
const botaoVerificar = document.querySelector('#btnVerificar')
const res = document.querySelector('#resultado')

const elementos_array = [21, 25, 19, 20, 16, 18, 22]
p_array.innerHTML = '[' + elementos_array + ']'

botaoVerificar.addEventListener('click', (evt) => {
    const ret = elementos_array.every((e, i) => {
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
