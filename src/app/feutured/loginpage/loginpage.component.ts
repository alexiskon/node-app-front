import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../user-services/loginservice.service';
import { UserprofileService } from '../user-services/userprofile.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private fb: FormBuilder, private login: LoginserviceService,
    private router: Router, private userProfile: UserprofileService) { }

  loginForm: FormGroup;
  wrongCredentials: boolean = false;
  submitted: boolean = false;

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]

    })
  }

  submitLogin() {
    this.submitted = true;
    let user = this.loginForm.value
    this.login.loginUser(user).subscribe(data => {
      // console.log(1)
      // console.log(data.body.user._id, data.body.token)
      if (data.status === 200) {
        localStorage.setItem('userid', data.body.user._id)
        localStorage.setItem('token', data.body.token)
        this.router.navigate(['home'])
      }
      else {
        this.wrongCredentials = true;

        return
      }
    })
  }

}
