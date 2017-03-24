import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `{{obj.name}}<br>`
})

export class ChildComponent {
    @Input() obj: Classe;
}

export class Classe{
    name: String;
    id: number;
}