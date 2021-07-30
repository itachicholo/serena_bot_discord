const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Vaho Gélido'
        this.concurso = Concurso.Belleza
        this.tipo = Tipo.Agua
        this.potencia = 60
        this.precision = 90
        this.move_z = Cristal.get('hidrostal z')
    }
}

module.exports = new Movimiento()