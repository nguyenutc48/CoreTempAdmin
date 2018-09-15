import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs-compat/operator/retry';



@Injectable()
export class AuthRouteService {
    public redirectUrl: string;
    private API_URL = 'https://localhost:44394/api/';
    private Login_url = this.API_URL + 'auth/login';
    public loggedIn = false;
    constructor(private _http: HttpClient) {

    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    // login(userName: string, passWord: string): Observable<any> {
    //     // tslint:disable-next-line:no-debugger
    //     //debugger;
    //     const body = new HttpParams()
    //         .set('username', userName)
    //         .set('password', passWord);
    //     const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',  'Cache-Control': 'no-cache'});
    //     return this._http.post(this.Login_url, body.toString(), { headers: reqHeader });
    // }

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
