import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { DeleteuserService } from '../user-services/deleteuser.service';
import { UpdateuserService } from '../user-services/updateuser.service';
import { UserprofileService } from '../user-services/userprofile.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {

  updateForm: FormGroup = new FormGroup({
    name: new FormControl,
    email: new FormControl,
    password: new FormControl,
    confirmPassword: new FormControl
  });

  submitted: boolean = false;
  matchedPassword: boolean = false;
  user: User;
  confirmUpdate: boolean = false;

  constructor(private fb: FormBuilder, private update: UpdateuserService,
    private router: Router, private profile: UserprofileService,
    private deleteacc: DeleteuserService) { }

  ngOnInit(): void {

    this.profile.getUserProfile().subscribe(data => {
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
    if ((this.updateForm.controls.confirmPassword.value || this.updateForm.controls.password.value) === null) {
      this.confirmUpdate = false;
    } else {
      this.confirmUpdate = true;
    }
    if (this.updateForm.controls.confirmPassword.value === this.updateForm.controls.password.value) {
      this.matchedPassword = true;
      console.log(1)
    }

    if (this.updateForm.invalid || (this.matchedPassword === false) || (this.confirmUpdate === false)) {
      return;
    } else {
      //email already exists error handle
      console.log(this.confirmUpdate)
    }
    if (this.confirmUpdate && this.matchedPassword) {
      let credentials: User = this.updateForm.value
      console.log(credentials)
      this.update.updateUser(credentials).subscribe(value => {
        localStorage.setItem('userid', value._id)
        localStorage.setItem('token', value.token)
        this.router.navigate(['home'])
      })
    }

  }

  deleteAccount() {
    let result = window.confirm("Are you sure?")
    if (result) {
      this.deleteacc.deleteUser().subscribe(data => {
        if (data.status === 200) {
          console.log(data.status)
          this.router.navigate([""]);
        }
      });
    } else {
      return;
    }
  }

}
