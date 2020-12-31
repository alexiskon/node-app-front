import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { UpdateuserService } from '../services/updateuser.service';
import { UserprofileService } from '../services/userprofile.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {

  updateForm: FormGroup;
  submitted: boolean = false;
  matchedPassword: boolean = false;
  user: User;

  constructor(private fb: FormBuilder, private update: UpdateuserService,
    private router: Router, private profile: UserprofileService) { }

  ngOnInit(): void {

    this.profile.getUserProfile().subscribe(data => {
      console.log(data.body.name)
      this.updateForm = this.fb.group({
        email: [data.body.email],
        name: [data.body.name],
        password: [null, Validators.minLength(8)],
        confirmPassword: [null, Validators.minLength(8)]
      })
    })
  }
  submitUpdate() {
    this.submitted = true;
    if (this.updateForm.controls.confirmPassword.value === this.updateForm.controls.password.value) {
      this.matchedPassword = true;
    }
    if (this.updateForm.invalid || this.matchedPassword === false) {
      return;
    } else {
      //email already exists error handle
      let credentials: User = this.updateForm.value
      console.log(credentials)
      this.update.updateUser(credentials).subscribe(value => {
        localStorage.setItem('userid', value._id)
        localStorage.setItem('token', value.token)
        this.router.navigate(['home'])
      })
    }
  }
}
