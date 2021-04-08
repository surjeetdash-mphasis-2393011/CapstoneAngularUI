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
    return this.http.get("http://localhost:8082/projects/getByEmail/"+Email);
  }

  createProject(project: Project): Observable<any> {
    return this.http.post("http://localhost:8082/projects/post", project);
  }

  updateProject(project: Project): Observable<any> {
    return this.http.post("http://localhost:8082/projects/update", project);
  }
  deleteProject(id: any): Observable<any> {
    return this.http.delete("http://localhost:8082/projects/delete/" + id);
  }
}
