import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project/project.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getProjectDetails(Email:String): Observable<any> {
    return this.http.get("http://localhost:8080/projects/getByEmail/"+Email);
  }

  createProject(project: Project): Observable<any> {
    return this.http.post("http://localhost:8080/projects/post", project);
  }

  updateProject(project: Project): Observable<any> {
    return this.http.put("http://localhost:8080/projects/update", project);
  }
  deleteProject(id:number) {
    console.log(id)
    let url="http://localhost:8080/projects/delete/"+ id
    console.log(url)
    return this.http.get("http://localhost:8080/projects/delete/"+id)
  }

  getallProjects(){
    return this.http.get("http://localhost:8080/projects")
  }
}
