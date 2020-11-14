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
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'masking',
        loadChildren: () =>
            import('./modules/masking/masking.module').then(m => m.MaskingModule)
      }
    ]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'painting',
        loadChildren: () =>
            import('./modules/inpainting/inpainting.module').then(m => m.InpaintingModule)
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
