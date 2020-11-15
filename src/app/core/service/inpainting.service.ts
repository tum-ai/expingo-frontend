import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InpaintingService {
  private readonly impaintingURL = 'https://expingo-inpaint-service-oztyeiy7sa-uc.a.run.app/inpaint/';
  //private readonly impaintingURL = 'http://localhost:8081/inpaint/';

  constructor(private http: HttpClient) { }

  paintImage(image, mask): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'accept': 'image/png'})
    return this.http.post<any>(this.impaintingURL, {image: image, mask: mask}, {responseType: "blob" as "json", headers: headers});
  }
}
