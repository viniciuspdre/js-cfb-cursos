function multi(...v) {
    let r = 1
    for (let i of v) {
        r *= i
    }
    console.log(r)
}

multi(5, 4, 3, 2, 1)