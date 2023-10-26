import { NgModule } from '@angular/core';
import { ServerComponent } from './server.component';
import { SharedModule } from '../Shared.module';

@NgModule({
    declarations: [
        ServerComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ServerComponent
    ]
})
export class ServerModule { }
