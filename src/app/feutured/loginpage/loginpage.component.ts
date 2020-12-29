import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private fb: FormBuilder, private login: LoginserviceService,
    private router: Router) { }

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
    console.log(user)
    this.login.loginUser(user)
    .subscribe( value => {
      console.log(value.status)
      if (value.status === 200) {
        this.router.navigate(['home'])
      }
      else {
        this.wrongCredentials = true;
        return
      }
    })
  }

}
