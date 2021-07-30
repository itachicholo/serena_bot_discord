const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Carga Oscura'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Oscuro
        this.potencia = 55
        this.precision = 100
        this.move_z = Cristal.get('oscuristal z')
    }
}

module.exports = new Movimiento()