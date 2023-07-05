let colocacao = 5

switch (colocacao) {
    case 1:
        console.log('Primeiro lugar!')
        break
    case 2:
        console.log('Segundo lugar!')
        break
    case 3:
        console.log('Tereceiro lugar!')
        break
    case 4: case 5: case6:
        console.log('Prêmio de participação!')
        break
    default:
        console.log('Não obteve colocação...')
        break
}