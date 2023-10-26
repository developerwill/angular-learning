import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerModule } from './server/server.module';
import { SharedModule } from './Shared.module';

@NgModule({
    declarations: [
        AppComponent,
        ServersComponent,
        WarningAlertComponent,
        SuccessAlertComponent
    ],
    imports: [
        SharedModule,
        ServerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
