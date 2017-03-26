import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
    <hr>
    <h3>ChildComponent</h3>
    <p>{{obj | json}}</p>
    <label>Funciona two-way com ngModel</label><input [(ngModel)]="obj.name"/><br>
    <label>Teste EventEmitter - Veja console.log()</label>
    <input (input)="dispara($event.target.value)" />
    <hr>
    `,
    inputs:['obj'],
    outputs: ['eventoTeste:testeEventoTeste']
})

export class ChildComponent {
    obj: Classe;
    eventoTeste = new EventEmitter<Classe>();
    //Necessário utilizar Output() para emissor de eventos.

    novoObjeto = new Classe();

    dispara(nome: string){
        this.novoObjeto.name = nome;
        this.eventoTeste.emit(this.novoObjeto);
        console.log(this.novoObjeto);
        
    }
}

export class Classe{
    name: String;
    id: number;
}