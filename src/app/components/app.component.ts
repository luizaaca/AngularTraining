import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <img [src]="heroImageUrl">
  <br>
  <button [disabled]="isUnchanged">Cancel is disabled</button>
  <div [ngClass]="classes">[ngClass] binding to the classes property</div>
  <child-component [name]="childName"></child-component>
  `,
})
export class AppComponent {
  name = 'Angular';
  heroImageUrl = 'http://kingofwallpapers.com/imagem/imagem-005.jpg';
  isUnchanged = true;
  classes = 'teste';
  childName = 'Angular Child++++';
}
