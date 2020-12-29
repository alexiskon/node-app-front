import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './feutured/homepage/homepage.component';
import { LoginpageComponent } from './feutured/loginpage/loginpage.component';
import { SignuppageComponent } from './feutured/signuppage/signuppage.component';

const routes: Routes = [{
  path: "", component: LoginpageComponent
},
{
  path: "signup", component: SignuppageComponent
},
{
  path: "home", component: HomepageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
