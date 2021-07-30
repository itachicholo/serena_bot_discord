const Base = require('../../Tipos/ObjetoDeIntercambio')

class Objeto extends Base {
    constructor() {
        super()

        this.nombre = 'Banda Recia'
        this.emoji = ''
        this.descripcion = 'Hereda la defensa especial de tu pokémon en la crianza.'
    }
}

module.exports = new Objeto()