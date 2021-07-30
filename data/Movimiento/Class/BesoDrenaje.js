const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Beso Drenaje'
        this.concurso = Concurso.Dulzura
        this.tipo = Tipo.Hada
        this.potencia = 50
        this.precision = 100
        this.move_z = Cristal.get('feeristal z')
    }
}

module.exports = new Movimiento()