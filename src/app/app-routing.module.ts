import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { Signup2Component } from './signup2/signup2.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},{
  path: 'signup',
  component: Signup2Component
},{
  path: 'home',
  component: HomeComponent
},
{
  path: 'project',
  component: ProjectComponent
},

{
  path: 'profile',
  component: ProfileComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
