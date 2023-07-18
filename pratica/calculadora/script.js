let val = [...document.querySelectorAll('.valores')]
let tela = document.getElementsByClassName('tela')

val.map((e) => {
    // console.log(e.innerHTML)
    e.addEventListener('click', (evt) => {
        let v = evt.target
        console.log(v.innerHTML)
        tela.innerText = v.innerHTML
    })
})