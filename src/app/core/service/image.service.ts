import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageSrc = '';

  constructor() { }

  displayImage(src: string) {
    this.imageSrc = src;
  }
}
