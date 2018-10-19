import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs-compat/operator/retry';
import { User } from '../models/user.model';
import { Employee } from '../models/employee.model';
import { UserLogin } from '../models/login.model';



@Injectable()
export class AuthRouteService {
    public redirectUrl: string;
    private API_URL = 'https://localhost:44357/api/';
    private Login_url = this.API_URL + 'auth/login';
    private Register_url = this.API_URL + 'employee';
    public loggedIn = false;
    constructor(private _http: HttpClient) {

    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    registerUser(user: User) {
        const login_account: UserLogin = {
            UserName: user.UserName,
            Password: user.Password };
        const body: Employee = {
          Name: user.FullName,
          GEN: user.UserName,
          PhoneNumber: '',
          Department: '',
          Group: '',
          Account: login_account,
          Email: user.Email
        };
        const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',  'Cache-Control': 'no-cache'});
        return this._http.post(this.Register_url, body);
      }

    login(userName: string, passWord: string): Observable<any> {
        // tslint:disable-next-line:no-debugger
        const body = new HttpParams()
            .set('Username', userName)
            .set('Password', passWord);
        const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',  'Cache-Control': 'no-cache'});
        return this._http.post(this.Login_url, body, { headers: reqHeader});
    }

    logout(): void {
        this.loggedIn = false;
    }
}
