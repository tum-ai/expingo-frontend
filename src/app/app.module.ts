import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ImageDisplayComponent } from './layout/image-display/image-display.component';
import { MatIconModule } from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    ContentLayoutComponent,
    SidebarComponent,
    ImageDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
