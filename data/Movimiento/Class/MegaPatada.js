
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Mega Patada'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Normal
        this.potencia = 120
        this.precision = 75
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()