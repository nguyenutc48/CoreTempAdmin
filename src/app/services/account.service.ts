import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class AccountService {

    // tslint:disable-next-line:no-inferrable-types
    BASE_URL: string = 'http://localhost:9090/api/account';
    private loggedIn = false;

    constructor(private http: Http) {}
    login(username: string, password: string): Observable<any> {

    }
}