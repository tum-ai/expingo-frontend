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

  storeRequest(request: PaintingRequest) {
    this.request = request;
  }

  getStoredRequest(): PaintingRequest  {
      return this.request;
  }
}
