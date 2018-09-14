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
  isLoginError: boolean = false;
  constructor(
    private authService: AuthRouteService,
    private router: Router) {}

  ngOnInit() {

  }

  // login(): void {
  //   this.authService.login(this.loginForm.value
  //   .username, this.loginForm.value.password).subscribe(
  //     res => {
  //       if (res.data.count === 1) {
  //         this.errorMsg = '';
  //         localStorage.setItem('auth_token', this.loginForm.value.username);
  //         this.router.navigateByUrl('/dashboard');
  //       } else {
  //         this.errorMsg = 'Invalid Account';
  //       }
  //     },
  //     error => {
  //       this.errorMsg = error.message;
  //     }
  //   );
  // }

  OnSubmit(userName, password) {
    this.authService.login(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigateByUrl('/dashboard');
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }
}
