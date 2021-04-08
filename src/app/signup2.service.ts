import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Signup2Service {

  url:string='http://localhost:8082/users/';
  constructor(private http:HttpClient) { }
  //adding users for signup
  addUsers(user:any)
  {
    return this.http.post(this.url,user);
  }
}
