import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouter } from './utils/app-router.module';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRouter
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        InfoComponent
    ],
    bootstrap: [AppComponent]
})
    
export class AppModule { }
