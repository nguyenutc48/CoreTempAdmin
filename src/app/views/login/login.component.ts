import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthRouteService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  isLoginError = false;
  errorMsg = '';
  passwordPatternStreng = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';

  constructor(
    private authService: AuthRouteService,
    private router: Router) {}

  ngOnInit(
  ) {

  }

  OnSubmit(userName, password) {
    this.authService.login(userName, password).subscribe((data: any) => {
        this.errorMsg = '';
        localStorage.setItem('userToken', data.token);
        this.authService.loggedIn = true;
        this.router.navigateByUrl('/dashboard');
    },
    error => {
      this.errorMsg = error.message;
    });
  }

  OnClickRegister() {
    // tslint:disable-next-line:no-debugger
    this.router.navigateByUrl('/register');
  }
}
