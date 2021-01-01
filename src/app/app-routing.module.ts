import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsettingsComponent } from './feutured/accountsettings/accountsettings.component';
import { HomepageComponent } from './feutured/homepage/homepage.component';
import { LoginpageComponent } from './feutured/loginpage/loginpage.component';
import { SignuppageComponent } from './feutured/signuppage/signuppage.component';
import { TaskformComponent } from './feutured/taskform/taskform.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [{
  path: "", component: LoginpageComponent
},
{
  path: "signup", component: SignuppageComponent
},
{
  path: "home", component: HomepageComponent, canActivate:[AuthGuard], children: [{path: "taskform", component: TaskformComponent}]
},
{
  path: "account",  component: AccountsettingsComponent, canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
