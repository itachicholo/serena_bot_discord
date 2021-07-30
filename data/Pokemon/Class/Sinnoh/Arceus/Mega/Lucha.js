const Base = require('../Form/Lucha').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Arceus Tipo Lucha'
        this.peso = 350
        this.altura = 4
        this.evolucion = []
        this.stats = {
            hp: 120,
            attack: 150,
            defense: 120,
            spattack: 140,
            spdefense: 120,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}