import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  url:any=" http://localhost:3000/users";
  postUser(data:any){6
    return  this.http.post(this.url,data);
  }
  getUser(){
    return this.http.get(this.url);
  }
  delUser(id:any){
    return this.http.delete(this.url+"/"+id)
  }
  getDataById(id:any){
    return this.http.get(this.url+"/"+id)
  }
}
