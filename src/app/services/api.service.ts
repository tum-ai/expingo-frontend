import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly maskingURL = 'https://expingo-mask-service-oztyeiy7sa-uc.a.run.app/getMasks';
  private readonly impaintingURL = '';
  constructor(private http: HttpClient) { }
  
  // Function that calls the masking API
  getMasks(classes, file): Observable<any> {
    let params = new HttpParams().set('classes', classes);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json'
      }),
      params:params
    };
    return this.http.post(this.maskingURL,
        {
          'file': file
        },
        httpOptions)
  }
}
