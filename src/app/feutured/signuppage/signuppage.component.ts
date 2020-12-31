import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { SignupserviceService } from '../services/signupservice.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent implements OnInit {

  constructor(private fb: FormBuilder, private signup: SignupserviceService,
    private router: Router) { }

  signupForm: FormGroup;
  submitted: boolean = false;
  matchedPassword: boolean = false;

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]]
    })

  }

  submitSignup() {
    this.submitted = true;
    if (this.signupForm.controls.confirmPassword.value === this.signupForm.controls.password.value) {
      this.matchedPassword = true;
    }
    if (this.signupForm.invalid || this.matchedPassword === false) {
      return ;
    } else {
      let credentials: User = this.signupForm.value
      this.signup.signupUser(credentials).subscribe( value => {
        localStorage.setItem('userid', value.user._id)
        localStorage.setItem('token', value.token)
        // console.log(value.token, value, value.user._id, value.user.name)
        this.router.navigate(['home'])
      })
    }
  }
 
}
