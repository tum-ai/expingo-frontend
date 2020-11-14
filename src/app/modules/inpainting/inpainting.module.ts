import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InpaintingComponent } from './page/inpainting.component';
import {SharedModules} from '../../shared/shared.module';
import { InpaintingRoutingModule } from './inpainting.routing';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [InpaintingComponent],
  imports: [
    CommonModule,
    SharedModules,
    InpaintingRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ]
})
export class InpaintingModule { }
