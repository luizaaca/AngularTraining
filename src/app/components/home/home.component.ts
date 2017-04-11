import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component',
    styleUrls: ['home.component']
})

export class HomeComponent {
 mostrar = false;

    toogle() {
        this.mostrar = !this.mostrar;
    }
}