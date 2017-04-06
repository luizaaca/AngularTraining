import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DatepickerModule, PaginationModule } from 'ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap';


import { UniversalModule } from 'angular2-universal';
import './rxjs-operators';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import { ScheduleEditComponent } from './components/schedules/schedule-edit.component';
import { ScheduleListComponent } from './components/schedules/schedule-list.component';
import { UserCardComponent } from './components/users/user-card.component';
import { UserListComponent } from './components/users/user-list.component';

import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        DateFormatPipe,
        HighlightDirective,
        MobileHideDirective,
        ScheduleEditComponent,
        ScheduleListComponent,
        UserCardComponent,
        UserListComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'users', component: UserListComponent },
            { path: 'schedules', component: ScheduleListComponent },
            { path: 'schedules/:id/edit', component: ScheduleEditComponent },
           // { path: '**', redirectTo: 'home' }
        ]),
        DatepickerModule,
        Ng2BootstrapModule,
        ModalModule,
        ProgressbarModule,
        PaginationModule,
        TimepickerModule
    ],
    providers: [
        ConfigService,
        DataService,
        ItemsService,
        MappingService,
        NotificationService
    ]
})
export class AppModule {
}
