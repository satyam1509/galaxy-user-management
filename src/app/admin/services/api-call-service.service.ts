import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://reqres.in/api/users?page=1')
  }
}
