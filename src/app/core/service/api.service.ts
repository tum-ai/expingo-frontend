import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly maskingURL = 'https://expingo-mask-service-oztyeiy7sa-uc.a.run.app/getMasks/';
  private readonly impaintingURL = 'https://expingo-inpaint-service-oztyeiy7sa-uc.a.run.app/inpaint/';
  constructor(private http: HttpClient) { }
  
  // Function that calls the masking API
  getMasks(classes, file): Observable<any> {
    console.log(file);
    let params = new HttpParams().set('classes', classes);
    const httpOptions = {
      params:params
    };
    const formData: FormData = new FormData();
    formData.set('file', file);
    
    return this.http.post<any>(this.maskingURL, formData, httpOptions);
  }
  
  getImpaintedImage(image, mask) : Observable<any> {
    const formData: FormData = new FormData();
    formData.set('image', image);
    formData.set('mask', mask);
    return this.http.post<any>(this.impaintingURL, formData);
  }
}
