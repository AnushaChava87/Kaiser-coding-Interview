import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getDatafromreqres(){
      return this.http.get('https://reqres.in/api/users').pipe(map((res:any)=>{
        console.log(res);
        return res.data;
      }))
  }
}
