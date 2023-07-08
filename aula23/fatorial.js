function fatorial(v = 0) {
    let f = 1
    let r = 1
    for(v; v > f; v--) {
        r *= v 
    }
    console.log(r)
}

fatorial(6)