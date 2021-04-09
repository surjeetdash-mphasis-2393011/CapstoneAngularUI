import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string='http://localhost:8080/users/'
  url2:string='http://localhost:8080/users/login/'

  constructor(private http:HttpClient) { }

  validateUser(emailId,password)
  {
    return this.http.get(this.url2+emailId+'/'+password);

  }

  loggedIn(){
    let emailId = localStorage.getItem('id')
    console.log(!emailId == null);
     return !(emailId == null)
    
    
  }
}
