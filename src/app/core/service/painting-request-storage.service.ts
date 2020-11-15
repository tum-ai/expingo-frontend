import { Injectable } from '@angular/core';


class PaintingRequest {
    constructor(readonly image: any, readonly mask: any) { }
}

@Injectable({
  providedIn: 'root'
})
export class PaintingRequestStorageService {

  private request: PaintingRequest;
  constructor() { }

  storeRequest(image: any, mask: any) {
    this.request = new PaintingRequest(image, mask);
  }

  getStoredMask()  {
      return this.request.mask;
  }

  getStoredImage() {
      return this.request.image;
  }
}
