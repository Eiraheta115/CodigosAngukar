import { Component } from '@angular/core';
@Component({
    selector: 'codigos',
    templateUrl: './codigo.component.html'
})

export class CodigoComponent{
    public nombre = 'nombre del componente';
    public codigos: number[] = this.getCodigos(100);
    
    constructor(){    }

    public getCodigos(cantidad: number){
        var hoy = new Date();
        var res = hoy.toISOString().slice(0,10).replace(/-/g,"");
        console.log(res);
        var cod = [];
        for (let index = 1; index < cantidad; index++) {
            cod.push(res+index); 
        }
        return cod;
    }


}
