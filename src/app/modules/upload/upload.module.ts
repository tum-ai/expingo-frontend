import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './page/upload.component';
import { UploadRoutingModule } from './upload.routing';


@NgModule({
    declarations: [
        UploadComponent,
    ],
    imports: [
        CommonModule,
        UploadRoutingModule,
    ],
    providers: [],
})
export class UploadModule { }
