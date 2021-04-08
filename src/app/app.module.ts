import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProfileComponent } from './profile/profile.component';
import {ModalModule} from "ngx-bootstrap/modal";

import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { Signup2Component } from './signup2/signup2.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,

    NavbarComponent,
    Signup2Component,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ModalModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
