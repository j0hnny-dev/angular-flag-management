import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        TableModule,
        CheckboxModule
    ],
    exports: [
        ButtonModule,
        CheckboxModule,
        TableModule
    ],
    providers: []
})
export class PrimengModule { }