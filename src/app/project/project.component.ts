import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';
export interface Project {
  projectId: number
  projectName: string
  projectDesc: string
  duration: string
  emailId:string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

  dataSaved = false;
  employeeForm: FormGroup;
  allProjects: Observable<Project[]> | undefined;
  employeeIdUpdate: any;
  message: string = "";
  modalRef: BsModalRef;
  projectId:any;
  formData:any;
  projectInfo:Project;

  constructor(private modalService: BsModalService,private formbulider: FormBuilder, private projectService: ProjectService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.employeeForm = this.formbulider.group({
      projectName: ['', [Validators.required]],
      projectDesc: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      projectId: ["", [Validators.required]],
    });
    this.getProjectDetails();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const project = this.employeeForm.value;
    this.createProject(project);
    this.employeeForm.reset();
  }

  getProjectDetails() {
  let  eid=localStorage.getItem('id');
    this.allProjects = this.projectService.getProjectDetails(eid);
  }

  createProject(project: Project) {
    console.log(project);
    if (project.projectId == null) {
      this.projectService.createProject(project).subscribe((data) => {
        this.getProjectDetails();
      }, (error) => {

      })
    } else {
      this.projectService.updateProject(project).subscribe((data) => {
        this.getProjectDetails();
      }, (error) => {

      })
    }
  }

  loadProjectInfo(project:Project,template:TemplateRef<any>)
  {

   this.employeeForm.controls['projectName'].setValue(project.projectName);
   this.employeeForm.controls['projectDesc'].setValue(project.projectDesc);
   this.employeeForm.controls['emailId'].setValue(project.emailId);
   this.employeeForm.controls['duration'].setValue(project.duration);
   this.employeeForm.controls['projectId'].setValue(project.projectId);
   this.projectInfo=project;
    this.modalService.show(template);
  }

  deleteProject(id:any)
  {


    this.projectService.deleteProject(id).subscribe(data=>{
      this.getProjectDetails();
    });
  }

  close(){

    this.formData=this.employeeForm.value;
    console.log(this.employeeForm.value)
   
    if(this.formData.projectId != undefined)
    {
      console.log(this.formData.projectId)
      this.projectService.updateProject(this.formData).subscribe((data)=>{
        this.getProjectDetails();
      },(error)=>{

      })
    }
    else{
      let project:Project={} as Project;
      project.duration=this.formData.duration;
      project.emailId=this.formData.emailId;
      project.projectDesc=this.formData.projectDesc;
      project.projectName=this.formData.projectName;
      this.projectService.createProject(project).subscribe((data)=>{
        this.getProjectDetails();
      },(error)=>{

      })
    }
    this.employeeForm.reset();
      this.modalService.hide()


    }

  // }
  resetForm() {
    this.employeeForm.reset();
    this.message = "";
    this.dataSaved = false;
  }
}
