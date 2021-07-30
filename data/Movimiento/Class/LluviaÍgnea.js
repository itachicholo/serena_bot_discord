const Tipo = require('../../Tipo')
const Categoria = require('../Especial')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Lluvia Ígnea'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Fuego
        this.potencia = 100
        this.precision = 75
        this.move_z = Cristal.get('pirostal z')
    }
}

module.exports = new Movimiento()