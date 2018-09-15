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



@Injectable()
export class AuthRouteService {
    public redirectUrl: string;
    private API_URL = 'https://localhost:44394/api/';
    private Login_url = this.API_URL + 'auth/login';
    private Register_url = this.API_URL + 'auth/register';
    public loggedIn = false;
    constructor(private _http: HttpClient) {

    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    registerUser(user: User) {
        const body: User = {
          UserName: user.UserName,
          Password: user.Password,
          RePassword: user.Password,
          Email: user.Email,
          Fullname: user.Fullname
        };
        return this._http.post(this.Register_url, body);
      }

    login(userName: string, passWord: string): Observable<any> {
        // tslint:disable-next-line:no-debugger
        // debugger;
        const body = new HttpParams()
            .set('username', userName)
            .set('password', passWord);
        const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',  'Cache-Control': 'no-cache'});
        return this._http.post(this.Login_url, body, { headers: reqHeader});
    }

    logout(): void {
        this.loggedIn = false;
    }
}
