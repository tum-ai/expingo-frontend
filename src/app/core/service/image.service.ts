import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  @Output() imageChanged = new EventEmitter();
  constructor() { }

  displayImage(imageFile: any) {
    console.log('Displaying Image: ' + imageFile.name);
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.imageChanged.emit(fileReader.result);
    };
    fileReader.readAsDataURL(imageFile);
  }
}
