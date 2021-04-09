import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfileServiceService } from '../profile-service.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  modalRef: BsModalRef;
  modalRef2:BsModalRef;
  employee:any;
  updateform:any
  projectForm:any
  projectdata:any

  constructor(private fb:FormBuilder, private modalService: BsModalService, private profileSer:ProfileServiceService , private ps:ProjectService) {


    this.updateform = this.fb.group({
      emailId:[],
      firstName:[],
      lastName:[],
      employeeId:[],
      dateOfBirth:[],
      locationId:[]

    })

    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required]],
      projectDesc: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      projectId: ["", [Validators.required]],
    });
   }

  ngOnInit(): void {

    this.getallUsers()
    this.getAllProjects();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
  }
  openModal2(template: TemplateRef<any>) {

    this.modalRef2= this.modalService.show(template);
  }


  close(){
     
    this.createUser();
   
    this.modalRef.hide();
  }


   getallUsers(){
          
    this.profileSer.getallprofiles().subscribe(data=>{
      this.employee= data;
      this.employee.locationId = this.employee.locationId == 1? "Chennai" : "Bangalore"

      console.log(this.employee)
    })

     
  }


  createUser(){
    this.profileSer.createprofile(this.updateform.value).subscribe(data=>{
      console.log(data)
      this.getallUsers();
    })

 
    
    
  }
   

  getAllProjects(){

    this.ps.getallProjects().subscribe(data=>{
      console.log("data recieved")
      this.projectdata= data

    })
  }
 
  createProject(){
    this.ps.createProject(this.projectForm.value).subscribe(data=>{
      console.log(data);

      this.getAllProjects();
      
    })
  }
  closeproject(){
   this.createProject();
 
  
   this.modalRef2.hide();
  }
  logout(){
    localStorage.clear();
    window.location.reload();
  }
}
