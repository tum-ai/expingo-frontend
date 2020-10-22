import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaskComponent } from './page/mask.component';

export const routes: Routes = [
    {
        path: '',
        component: MaskComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MaskingRoutingModule {}
