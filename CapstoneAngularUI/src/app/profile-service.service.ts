import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  url:string= "http://localhost:8080/profile/"
  constructor(private http:HttpClient) { }

  getprofile(email:string){

    return this.http.get(this.url+email)


  }

  modifiyProfile(profile:any){
 
      return this.http.put(this.url+"updateprofile", profile)
  }
  
  

   
}
