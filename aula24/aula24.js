// let f = function(...valores) {
//     let res = 0
//     for (let v of valores) {
//         res += v
//     }
//     return res
// }

const f = new Function('v1', 'v2','return v1 + v2')

console.log(f(10,5))