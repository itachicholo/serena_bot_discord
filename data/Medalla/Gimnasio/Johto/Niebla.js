const Base = require('../Base')

class Medal extends Base {
    constructor() {
        super()

        this.nombre = 'Medalla Niebla'
        this.titulo = 'Ganador en Gimnasio de Ciudad Iris'
        this.descripcion = 'Medalla obtenida tras ganar en el gimnasio de Ciudad Iris.'
    }
}

module.exports = new Medal()