"use strict"

/*

VAR: Funciona em todo escopo
LET: Funciona daquele escopo para frente
CONST: Só aceita o primeiro valor

*/

function teste() {
    let nome = 'Bruno'
    if (true) {
        console.log('Dentro do IF do teste: ' + nome)
    }
    console.log('Fora do IF do teste ' + nome)
}

teste()

console.log('Fora de teste: ' + nome)

