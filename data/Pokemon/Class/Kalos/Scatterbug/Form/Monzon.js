const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Monzón'
        this.color = Entidades.Color.Gris
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}