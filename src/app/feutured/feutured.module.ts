import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { TaskformComponent } from './taskform/taskform.component';
import { MathomeComponent } from './mathome/mathome.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [LoginpageComponent, SignuppageComponent, AccountsettingsComponent, TaskformComponent, MathomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [LoginpageComponent, SignuppageComponent, AccountsettingsComponent, TaskformComponent, MathomeComponent, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule, MatButtonModule]
})
export class FeuturedModule { }
