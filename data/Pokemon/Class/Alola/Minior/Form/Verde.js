const Base = require('../Minior').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Minior Núcleo Verde'
        this.peso = 0.3
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.stats = {
            hp: 60,
            attack: 100,
            defense: 60,
            spattack: 100,
            spdefense: 60,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}