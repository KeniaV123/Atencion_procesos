const Proceso = require('./proceso').default

let Procesador = () =>{
    let inicio = null;
    let ultimo = null;
    let hecho = 0;
    let vacio = 0;
    let tamaño = 0;

    const agregar = (nuevo) =>{
        if(inicio == null){
            inicio = nuevo;
            ultimo = nuevo;
            inicio.siguiente = nuevo;
        } else{
            nuevo.siguiente = inicio;
            ultimo.siguiente = nuevo;
            ultimo = nuevo;
        }
    }

    const empezar = () =>{
        let primero = 1;
        for(let i = 0; i < 300; i++){
            let probabilidad = Math.floor(Math.random() * (100-1)+1);
            if (inicio == null){
                vacio++;
            }
            if(probabilidad < 39){
                let nuevo = new Proceso(primero);
                agregar(nuevo);
                primero++;
                tamaño++;
            }
            let aux = inicio;
            if(aux != null){
                if(aux.ciclo == 0){
                    eliminar(aux);
                    tamaño--;
                    hecho++;
                }
                aux.ciclo--;
                aux = aux.siguiente;
            }
            mostrar();
        }
    }

    const buscar = (aux) =>{
        let actual = inicio;
        if(actual == aux){
            return ultimo;
        } else{
            while(actual.siguiente != aux && ultimo != aux){
                actual = inicio.siguiente;
            }
            return actual;
        }
    }

    const eliminar = (aux) =>{
        let anterior = buscar(aux);
        if(aux == inicio && aux == ultimo){
            inicio = null;
            ultimo = null;
        } else if(aux == inicio){
            inicio = aux.siguiente;
            ultimo.siguiente = inicio;
        } else if(aux == ultimo){
            anterior.siguiente = inicio;
            ultimo = anterior;
        } else{
            anterior.siguiente = aux.siguiente;
        }
    }

    const mostrar = () =>{
        console.log(
            `
            - proceso realizado ${hecho},
            - ciclo vacio ${vacio}
            - proceso pendiente ${tamaño},
            `
        )
    }
    return {empezar:empezar, mostrar:mostrar}
}

exports.default = Procesador;