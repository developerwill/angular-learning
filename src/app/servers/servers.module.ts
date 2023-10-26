import { NgModule } from '@angular/core';
import { ServersComponent } from './servers.component';
//import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ServersComponent
    ],
    /* imports: [
        CommonModule
    ], */
    exports: [
        ServersComponent
    ]
})
export class ServersModule { }
