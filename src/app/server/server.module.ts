import { NgModule } from '@angular/core';
import { ServerComponent } from './server.component';
//import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ServerComponent
    ],
    /* imports: [
        CommonModule
    ], */
    exports: [
        ServerComponent
    ]
})
export class ServerModule { }
