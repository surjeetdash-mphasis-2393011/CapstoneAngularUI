import { Router } from '@angular/router';
import { ProfileServiceService } from './../profile-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // emailId= localStorage.getItem('id');
  Name:any;

  constructor( private Profileservice:ProfileServiceService ,private router:Router) { }

  ngOnInit(): void {
    var emailId = localStorage.getItem('id');
        this.Profileservice.getprofile(emailId).subscribe(data=>{
          this.Name=data;
          console.log(this.Name);
        })


  }

  clear(){
    console.log("clear called")
    localStorage.clear();
    // window.location.reload();
    // this.router.navigate(['login']);
  }

}
