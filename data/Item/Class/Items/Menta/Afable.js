const Base = require('../../Tipos/Menta')

class Menta extends Base {
    constructor() {
        super()

        this.nombre = 'Menta Afable'
        this.emoji = '<:mintcyan:760056695928913931>'
        this.descripcion = 'Aumenta el ataque especial y baja la defensa de tu Pokémon.'
    }
}

module.exports = new Menta()