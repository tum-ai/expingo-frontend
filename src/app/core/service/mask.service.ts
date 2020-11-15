import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaskService {
  private readonly maskingURL = 'https://expingo-mask-service-oztyeiy7sa-uc.a.run.app/getMasks/';
  //private readonly maskingURL = 'http://localhost:8080/getMasks/';

  constructor(private http: HttpClient) { }

  // Function that calls the masking API
  getMasks(classes, file): Observable<any> {
    console.log(file);
    let params = new HttpParams();
    for (let cl of classes) {
      params = params.append('classes', cl);
    }
    //const params = new HttpParams().set('classes', classes);
    const httpOptions = {
      params
    };
    const formData: FormData = new FormData();
    formData.set('file', file);

    return this.http.post<any>(this.maskingURL, formData, httpOptions);
  }

}
