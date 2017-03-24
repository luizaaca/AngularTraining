import { Component } from '@angular/core';
import { Classe } from './app.child.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <img bind-src="getSrc()">
  <img src="{{getSrc()}}"><br>
  <button [disabled]="isUnchanged">Cancel is disabled</button>
  <div ngClass="teste">[ngClass] binding to the classes property</div>
  <child-component obj="{{child}}"></child-component>
  <p>// interpolação só funciona com strings, em caso de objetos complexos usar property binding</p>
  <child-component [obj]="child"></child-component>
  <p><span>"{{evilTitle}}" is the <i>interpolated</i> evil title.</span></p>
  <p>"<span [innerHTML]="evilTitle"></span>" is the <i>property bound</i> evil title.</p>
  `,
})

export class AppComponent {
  name = 'Angular';
  heroImageUrl = 'http://kingofwallpapers.com/imagem/imagem-005.jpg';
  isUnchanged = true;
  classes = 'teste';
  child = new Classe();
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';


  constructor() {
    this.child.name = 'Angular Child++++';
    this.child.id = 1;
  }

  getSrc(): string {
    return this.heroImageUrl;
  }
}
