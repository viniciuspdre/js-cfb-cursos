let colecaoHTML = document.getElementsByTagName('div')
colecaoHTML = [...colecaoHTML]

colecaoHTML.map((e) => {
    console.log(e.innerHTML)
})
console.log(colecaoHTML)