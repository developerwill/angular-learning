import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        BrowserModule
    ]
})
export class SharedModule { }