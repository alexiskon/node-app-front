import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { UserprofileService } from '../feutured/services/userprofile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authedUserd: boolean;
  userToken = localStorage.getItem('token');

  constructor(private route: Router, private userProfile: UserprofileService) {

  }
  //Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.userProfile.getUserProfile().pipe(map((value) => {
      // catchError(this.handleError)
      if (this.userToken === value.body.token) {
        return true
      }
      console.log(1)
      window.confirm("Login first!");
      this.route.navigate(['']);
      return false
    }
     ));
  }
  // handleError(handleError: any): any {
  //   window.confirm("Login first!");
  //   this.route.navigate(['']);
  // }

}
