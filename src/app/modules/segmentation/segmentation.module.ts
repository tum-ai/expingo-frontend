import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSegComponent } from './page/image-seg.component';
import {SharedModules} from '../../shared/shared.module';
import {ImageSegRoutingModule} from './segmentation.routing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ImageSegComponent],
  imports: [
    CommonModule,
    SharedModules,
    ImageSegRoutingModule,
    MatCheckboxModule,
    MatChipsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class SegmentationModule { }
