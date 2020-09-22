import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './page/upload.component';
import { UploadRoutingModule } from './upload.routing';
import {SharedModules} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        UploadComponent,
    ],
    imports: [
        CommonModule,
        UploadRoutingModule,
        SharedModules,
        MatButtonModule,
    ],
    providers: [],
})
export class UploadModule { }
