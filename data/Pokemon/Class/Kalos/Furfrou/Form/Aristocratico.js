const Base = require('../Furfrou').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Furfrou Corte Aristocrático'
        this.color = Entidades.Color.Azul
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}