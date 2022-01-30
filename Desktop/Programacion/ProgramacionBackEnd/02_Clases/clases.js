class Producto {
    #nombre;
    #descripcion;
    #precio;
    #moneda;

    constructor(nombre, descripcion, precio, moneda){
        this.#nombre      = nombre;
        this.#descripcion = descripcion;
        this.#precio      = precio; 
        this.#moneda      = moneda;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getPrecio(){
        return this.#precio;
    }

    setPrecio(precio){
        if(precio == 0){
            console.error('Error, el precio no puede ser 0');
        }else{
            this.#precio = precio;
        }
    }
}

let mochila = new Producto ('Adidas', 'Mochila grande negra', 2999, 'USD');
console.log(mochila.getNombre());
console.log(mochila.getPrecio());
console.log(mochila.setPrecio(0));
