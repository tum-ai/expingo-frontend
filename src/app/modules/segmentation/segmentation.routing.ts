import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSegComponent } from './page/image-seg.component';

export const routes: Routes = [
    {
        path: '',
        component: ImageSegComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImageSegRoutingModule {}
