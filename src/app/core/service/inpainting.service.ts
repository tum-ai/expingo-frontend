import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InpaintingService {
  private readonly impaintingURL = 'https://expingo-inpaint-service-oztyeiy7sa-uc.a.run.app/inpaint/';
  private readonly paintingURL = 'http://localhost:8081/inpaint';

  constructor(private http: HttpClient) { }

  paintImage(image, mask): Observable<any> {
    const formData: FormData = new FormData();
    formData.set('image', image);
    formData.set('mask', mask);
    return this.http.post<any>(this.impaintingURL, formData);
  }
}
