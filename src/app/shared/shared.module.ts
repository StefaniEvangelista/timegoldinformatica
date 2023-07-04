import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';


@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        MainComponent,
    ]
})
export class SharedModule { }
