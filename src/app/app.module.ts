import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';

@NgModule({
    declarations: [
        AppComponent,
        ServersComponent,
        ServerComponent,
        WarningAlertComponent,
        SuccessAlertComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
