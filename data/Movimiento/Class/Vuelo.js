
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Vuelo'
        this.concurso = Concurso.Ingenio
        this.tipo = Tipo.Volador
        this.potencia = 90
        this.precision = 95
        this.move_z = Cristal.get('aerostal z')
    }
}

module.exports = new Movimiento()