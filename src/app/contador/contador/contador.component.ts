import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    template:  `
    <h1>{{ titulo }}</h1>
    <h3>La base es : <strong>{{ base }}</strong></h3>

    <button (click)= "acumular(+ base )"> + {{ base }} </button>
    <button (click)= "acumular(- base )"> - {{ base }} </button>
    <h2>{{ numero }}</h2>
    `
})

export class ContadorComponent {
    titulo: string  = 'Bases de Angular con Mauricio Suárez';
    numero: number = 10
    base  : number = 5
    
    acumular(valor:number){
        this.numero += valor
    }
}