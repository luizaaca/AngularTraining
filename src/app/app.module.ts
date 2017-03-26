import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { ChildComponent } from './components/app.child.component';
import { SizerComponent } from "./components/app.sizer.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ChildComponent,
    SizerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
