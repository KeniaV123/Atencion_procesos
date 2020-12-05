class Proceso {
    constructor(proceso){
        this.proceso = proceso;
        this.ciclo = Math.floor(Math.random()*(15-3)) + 3;
        this.siguiente = null;
    }
}

exports.default = Proceso;