import { NgModule } from '@angular/core';
import { ServersComponent } from './servers.component';
import { SharedModule } from '../Shared.module';

@NgModule({
    declarations: [
        ServersComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ServersComponent
    ]
})
export class ServersModule { }
