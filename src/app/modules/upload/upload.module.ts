import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './page/upload.component';
import { UploadRoutingModule } from './upload.routing';
import {SharedModules} from '../../shared/shared.module';


@NgModule({
    declarations: [
        UploadComponent,
    ],
    imports: [
        CommonModule,
        UploadRoutingModule,
        SharedModules
    ],
    providers: [],
})
export class UploadModule { }
