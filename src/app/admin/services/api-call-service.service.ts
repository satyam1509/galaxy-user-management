import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  constructor(private http:HttpClient) { }

  //apis' for postdata table

  getData(){
    return this.http.get('http://localhost:3000/posts-data/');
  }

  postData(data:any){
    return this.http.post('http://localhost:3000/posts-data/',data);
  }

  updateData(data:any,id:number){
    return this.http.put('http://localhost:3000/posts-data/'+id,data);
  }

  deleteData(id:number){
    return this.http.delete('http://localhost:3000/posts-data/'+id);
  }
}
