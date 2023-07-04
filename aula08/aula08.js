let n1 = 10
let n2 = 15

//& onde tiver equivalencia de bit 1 retorna 1 em binario
//| onde houver o bit, independente de equivalencia, retorna o valor 1 em binario
//^ onde nao houver equivalencia e houver o bit 1 retorna 1
//<< desloca os bits para a esquerda de acordo com o valor inserido
//>> desloca os bits para a direita de acordo com o valor inserido

let res = n1 ^ n2

console.log(res)