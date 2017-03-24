import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { ChildComponent } from './components/app.child.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ChildComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
