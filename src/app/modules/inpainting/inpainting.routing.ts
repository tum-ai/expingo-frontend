import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InpaintingComponent } from './page/inpainting.component';

export const routes: Routes = [
    {
        path: '',
        component: InpaintingComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InpaintingRoutingModule {}
