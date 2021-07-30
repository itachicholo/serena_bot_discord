
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Plancha Voladora'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Lucha
        this.potencia = 100
        this.precision = 95
        this.move_z = Cristal.get('lizastal z')
    }
}

module.exports = new Movimiento()