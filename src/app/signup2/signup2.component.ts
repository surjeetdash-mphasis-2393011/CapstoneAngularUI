import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup2Service } from '../signup2.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  signupForm :any;
  msg : String ="";
  msg2 : String ="";
  constructor(private ss : Signup2Service, private router : Router) {
    this.signupForm = new FormGroup({

			emailId: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('',[Validators.required,Validators.minLength(8), Validators.maxLength(20)]),
			confirmPassword: new FormControl('', [Validators.required])
		});
   }

  ngOnInit(): void {
  }
  onSubmit(){
		//to print in console(true or false)
		console.log(this.signupForm.valid);
      // localStorage.setItem('id',this.signupForm.get('emailId').value);
		//to print in console(values)
		if(this.signupForm.valid){
			console.log(this.signupForm.value);
		}


		//getting value for checking passwords


		let pass =  this.signupForm.get('password').value;
		let confirmPass = this.signupForm.get('confirmPassword').value;

		if(pass.length >0  && confirmPass.length >0){
			if(pass != confirmPass){
				alert('Passwords didn\'t match')

			}
			else{

				alert('Passwords matched')
							//	 var veh =this.signupForm.controls.contactNumber.value;
			// alert(veh)
			var user=this.signupForm.value;
			//this.vs.addVehicle(vehicle).subscribe(data=>console.log(data));
			this.ss.addUsers(user).subscribe(data =>{
			  console.log("received");
			  this.msg ="registered sucessfully"
			  this.router.navigate(['login'])

			},

			error =>{
			  console.log("exception occured");
			  this.msg2 ="user already exist";

			}
			  );

			}
		}
	}

  onSubmitcheck(){

    if(this.signupForm.valid){

    this.onSubmit();

    }
    else{
      alert("Enter Valid inputs" )
    }

   }


}
