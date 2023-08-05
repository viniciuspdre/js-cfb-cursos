class Carros{
    constructor(nome, tipo){
        this.nome = nome
        if(tipo == 1){
            this.tipo = 'Esportivo'
            this.velmax = 300
        }else if(tipo == 2){
            this.tipo = 'Utilitário'
            this.velmax = 100
        }else if(tipo == 3){
            this.tipo = 'Passeio'
            this.velmax = 160
        }else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    getNome() {
        return this.nome
    }
    getTipo() {
        return this.tipo
    }
    getVelMax() {
        return this.velmax
    }
    getInfo() {
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome) {
        this.nome=nome
    }
    setTipo(tipo) {
        this.tipo=tipo
    }
    setVelMax(velmax) {
        this.velmax=velmax
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log(``)
    }
}

let c1 = new Carros('Rapidão', 1)
let c2 = new Carros('Super Luxo', 3)
let c3 = new Carros('Bombadão', 6)
let c4 = new Carros('Carrego Tudo', 2)

// c1.info()
// c2.info()
// c3.info()
// c4.info()
c1.setNome('Bugatti')
c1.setTipo(3)
c1.setVelMax(500)
c1.info()
