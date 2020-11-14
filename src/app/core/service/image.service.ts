import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  @Output() imageChanged = new EventEmitter();

  image: any;
  combinedMask: any;
  private currentImage: any;

  constructor() {
    this.combinedMask = '';
  }

  getCurrentImage(): any {
    return this.currentImage;
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

  setImageFromBase64(base64String) {
    this.currentImage = base64String;
    this.displayCurrentImage();
  }

  resetMasks() {
    this.combinedMask = '';
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
