import { Component } from '@angular/core';
import { Classe } from './app.child.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './templates/app.component.html',
})

export class AppComponent {
  name = 'Angular';
  heroImageUrl = 'http://kingofwallpapers.com/imagem/imagem-005.jpg';
  isUnchanged = true;
  classes = { teste: true, italic: true };
  child = new Classe();
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  actionName = 'Toogle Class';
  isSpecial = true;
  fontSizePx = 10;

  constructor() {
    this.child.name = 'Angular Child++++';
    this.child.id = 1;
  }

  getSrc(): string {
    return this.heroImageUrl;
  }

  toogleClass() {
    this.isSpecial = !this.isSpecial;
  }

  recebeEvento(event: Classe) {
    console.log(event);
  }
}
