import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'upload',
        loadChildren: () =>
            import('./modules/upload/upload.module').then(m => m.UploadModule)
      }
    ]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'segmentation',
        loadChildren: () =>
            import('./modules/segmentation/segmentation.module').then(m => m.SegmentationModule)
      }
    ]
  },
  { path: '**', redirectTo: 'upload', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
