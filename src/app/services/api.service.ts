import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly maskingURL = 'https://expingo-mask-service-oztyeiy7sa-uc.a.run.app/getMasks';
//  private readonly maskingURL = 'http://localhost:8080/getMasks';
  private readonly impaintingURL = '';
  constructor(private http: HttpClient) { }
  
  // Function that calls the masking API
  getMasks(classes, file: File): Observable<any> {
    console.log(file);
    let params = new HttpParams().set('classes', classes);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
 //       'accept': 'application/json'
      }),
      params:params
    };
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.maskingURL, formData, httpOptions)
  }
}
