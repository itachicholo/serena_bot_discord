
const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Estallido'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Fuego
        this.potencia = 150
        this.precision = 100
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()