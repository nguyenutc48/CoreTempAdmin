import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Injectable()
export class AuthRouteService {
    public redirectUrl: string;
    private API_URL: string = 'https://localhost:44394/api/';
    private loggedIn = false;
    constructor(private _http: HttpClient) {

    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    login(username: string, password: string): Observable<any> {
        const data = 'username=' + username + '&password=' + password + '&grant_type=password';
        const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'});
        return this._http.post(this.API_URL + 'auth/login', data, {headers: reqHeader});
    }

    logout(): void {
        this.loggedIn = false;
    }
}
