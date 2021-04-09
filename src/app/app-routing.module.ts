import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { Signup2Component } from './signup2/signup2.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './auth-admin.guard';

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
  component: HomeComponent, canActivate:[AuthGuard]
},
{
  path: 'project',
  component: ProjectComponent, canActivate:[AuthGuard]
},

{
  path: 'profile',
  component: ProfileComponent , canActivate:[AuthGuard]
},
{path:"admin", component:AdminComponent , canActivate:[ AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
