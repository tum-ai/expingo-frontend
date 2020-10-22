import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskComponent } from './page/mask.component';
import {SharedModules} from '../../shared/shared.module';
import {MaskingRoutingModule} from './masking.routing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [MaskComponent],
  imports: [
    CommonModule,
    SharedModules,
    MaskingRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class MaskingModule { }
