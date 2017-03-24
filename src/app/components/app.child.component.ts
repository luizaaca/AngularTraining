import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `{{name}}`
})

export class ChildComponent {
    @Input() name: string;
}