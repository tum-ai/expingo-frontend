import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  @Output() imageChanged = new EventEmitter();
  image: any;
  display_image: any = '../../../assets/images/street.jpg';
  constructor() { }

  displayImage(imageFile: any) {
    this.image = imageFile;
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.imageChanged.emit(fileReader.result);
      this.display_image = fileReader.result;
    };
    fileReader.readAsDataURL(imageFile);
  }

  reloadCurrentImage() {
    this.imageChanged.emit(this.display_image);
  }
}
