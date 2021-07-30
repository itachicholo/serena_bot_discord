const Base = require('../../Tipos/Ball')

class Item extends Base {
    constructor() {
        super()

        this.nombre = 'Ultra Ball'
        this.precio = 100
        this.emoji = '<:ultra_ball:733515617918910536>'
        this.descripcion = 'Ratio de captura de 2 para todos los Pokémon.'

        this.capture = async object => {
            if(object.pokemon.categoria == 'Ultra Ente') return 0.1

            return 2
        }
    }
}

module.exports = new Item()