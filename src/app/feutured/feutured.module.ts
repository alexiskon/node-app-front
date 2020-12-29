import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginpageComponent, SignuppageComponent, HomepageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [LoginpageComponent, SignuppageComponent, HomepageComponent]
})
export class FeuturedModule { }
