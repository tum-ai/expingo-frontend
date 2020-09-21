import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarTitleComponent} from './sidebar-title/sidebar-title.component';



@NgModule({
  declarations: [
      SidebarTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      SidebarTitleComponent
  ]
})
export class SharedModule { }
