const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Pin Misil'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Bicho
        this.potencia = 75
        this.precision = 95
        this.move_z = Cristal.get('insectostal z')
    }
}

module.exports = new Movimiento()