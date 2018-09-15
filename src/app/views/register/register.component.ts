import { Component, OnInit } from '@angular/core';
import { AuthRouteService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPatternStreng = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';
  passwordPatternNormal = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$';

  constructor(private authservice: AuthRouteService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    this.route.navigateByUrl('/login');
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      UserName: '',
      Email: '',
      Password: '',
      RePassword: '',
      Fullname: ''
    };
  }

  OnSubmit(form: NgForm) {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (form.value.Password === form.value.RePassword) {
      this.authservice.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded === true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        } else {
          this.toastr.error(data.Errors[0]);
        }
      });
    } else {
      this.toastr.error('Mật khẩu không khớp');
      this.user.Password = '';
      this.user.RePassword = '';
    }

  }
}
