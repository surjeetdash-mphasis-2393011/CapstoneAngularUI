import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string='http://localhost:8082/users/'
  url2:string='http://localhost:8082/users/login/'

  constructor(private http:HttpClient) { }

  validateUser(emailId,password)
  {
    return this.http.get(this.url2+emailId+'/'+password);

  }
}
