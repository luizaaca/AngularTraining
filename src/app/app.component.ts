import { Component } from '@angular/core';
import '../assets/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    mostrar = false;

    toogle() {
        this.mostrar = !this.mostrar;
    }
 }
