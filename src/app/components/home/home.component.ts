import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
 mostrar = false;

    toogle() {
        this.mostrar = !this.mostrar;
    }
}