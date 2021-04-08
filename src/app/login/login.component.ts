import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:any;
  invalidCredentials:any;

  constructor(private formBuilder: FormBuilder, private ls:LoginService, private router:Router)
   {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void { }

  authUser( )
  {

    var emailId=this.loginForm.get('emailId').value;
    var password=this.loginForm.get('password').value;
    this.ls.validateUser(emailId,password).subscribe(data =>{
      if(data == 0){this.invalidCredentials="Once check the credentials";
      alert(this.invalidCredentials);
      // return false;
    }

      else{
        this.invalidCredentials="login successfull";
        alert(this.invalidCredentials);
        // localStorage.setItem("emailId",emailId);
        localStorage.setItem('id', (this.loginForm.get('emailId').value));
        this.router.navigate(['home']);
      }
    })
  }



  get formControl() {
    return this.loginForm.controls;
  }


}
