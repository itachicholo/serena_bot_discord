const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Pantano'
        this.color = Entidades.Color.Verde
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}