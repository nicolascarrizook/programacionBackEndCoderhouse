class Contador {
    responsable;
    cuentaIndiv;
    static cuentaGlobal = 0;

    constructor(responsable){
        this.responsable = responsable; 
        this.cuentaIndiv = 0;
    }

    getResponsable(){
        return this.responsable;
    }

    getCuentaIndiv(){
        return this.cuentaIndiv;
    }

    getCuentaGlobal(){
        return Contador.cuentaGlobal
    }

    contar(){
        this.cuentaIndiv ++;
        Contador.cuentaGlobal ++;
    }

}

let contador1 = new Contador('Nicolas');
let contador2 = new Contador('Matias');
let contador3 = new Contador('Leo');

contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();

console.log(contador1.getResponsable());
console.log(contador1.getCuentaIndiv());
console.log(contador1.getCuentaGlobal());
