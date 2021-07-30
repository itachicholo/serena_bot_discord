
const Tipo = require('../../Tipo')
const Categoria = require('../Físico')
const Concurso = require('../../Concurso')
const Cristal = require('../../../util/Item')

class Movimiento extends Categoria {
    constructor(){
        super()

        this.nombre = 'Roca Afilada'
        this.concurso = Concurso.Dureza
        this.tipo = Tipo.Roca
        this.potencia = 100
        this.precision = 80
        this.move_z = Cristal.get('litostal z')
    }
}

module.exports = new Movimiento()