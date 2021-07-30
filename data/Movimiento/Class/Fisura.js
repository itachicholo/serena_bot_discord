
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Fisura'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Tierra
        this.potencia = 250
        this.precision = 30
        this.move_z = Cristal.get('geostal z')
    }
}

module.exports = new Movimiento()