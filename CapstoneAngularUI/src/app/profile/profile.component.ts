import { DatePipe } from '@angular/common';

import { Component, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileServiceService } from '../profile-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  modalRef: BsModalRef;
  employee:any
  updateform:any
  modifiedData:any
  constructor(private modalService: BsModalService,  private profileserv:ProfileServiceService , private fb:FormBuilder,private dp:DatePipe) {
    
    this.updateform = this.fb.group({
      emailId:[],
      firstName:[],
      lastName:[],
      employeeId:[],
      dateOfBirth:[],
      locationId:[],
      projectId:[]
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {

    this.getprofile();
   
    

  }



  close(){
   
  this.modifiedData=this.updateform.value 
   this.modifiedData.locationId= this.modifiedData.locationId =="Chennai"? 1 : 2 

  this.profileserv.modifiyProfile(this.modifiedData).subscribe(data=>{
    this.employee = data
    this.employee.locationId=this.employee.locationId == 1? "Chennai" : "Bangalore"
    this.employee.dateOfBirth= this.dp.transform(this.employee.dateOfBirth,'yyyy-MM-dd')

  } )
  
    this.modalService.hide()

  
  }

  getprofile(){
    this.profileserv.getprofile("svs.venkatsai").subscribe(data => { 
      
      
      this.employee=data
      this.employee.locationId=this.employee.locationId == 1? "Chennai" : "Bangalore"
      this.employee.dateOfBirth= this.dp.transform(this.employee.dateOfBirth,'yyyy-MM-dd')
      this.updateform.patchValue(this.employee);
    
    
   }
      )
     
  }


}

// class Employee{
//   constructor(fullName:string, employeeId:number, email:string, dob:Date, location:string){}
// }
