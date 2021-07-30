const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Hiper Colmillo'
        this.concurso = Concurso.Carisma
        this.tipo = Tipo.Normal
        this.potencia = 80
        this.precision = 90
        this.move_z = Cristal.get('normastal z')
    }
}

module.exports = new Movimiento()