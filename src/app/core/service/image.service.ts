import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  @Output() imageChanged = new EventEmitter();

  image: any;
  combinedMask: any;
  currentImage: any;

  constructor() {
    this.combinedMask = '';
  }

  uploadImage(imageFile: any) {
    console.log(imageFile);
    this.image = imageFile;
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.currentImage = fileReader.result;
      this.displayCurrentImage();

    };
    fileReader.readAsDataURL(imageFile);
  }

  displayCurrentImage() {
    this.imageChanged.emit(this.currentImage);
  }

  public setCombinedMask(combinedMask) {
    this.combinedMask = combinedMask;
  }

  public getCombinedMask() {
    return this.combinedMask;
  }
}
