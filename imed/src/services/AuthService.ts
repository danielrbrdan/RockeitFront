import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, tap } from "rxjs";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
import { API_CONFIG } from "src/config/api.config";
import { PasswordDTO } from "src/app/models/dto/password";

@Injectable()
export class AuthService {
    
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    constructor(
        private http: HttpClient, 
        private loginService: LoginService,
    ) { 
        this._isLoggedIn$.next(!!this.token);
    }

    get token(){
        return localStorage.getItem('token')!;
    }

    login(user: String, pass: String){
        localStorage.removeItem('token');
        return this.loginService.login(user,pass).pipe(
            tap((response: any) => {
              this._isLoggedIn$.next(true);
              localStorage.setItem('token', response);
            })
          );
    }

    logout() {
        localStorage.removeItem('token');
        this._isLoggedIn$.next(false);
    }

    newUser(user: String, pass: String, name: String, crm: String){
        localStorage.removeItem('token');
        return this.loginService.newUser(user,pass, name).pipe(
            tap((response: any) => {
                return response;
            })
          );
    }
    changePassword(data: PasswordDTO) {
        return this.http.put<boolean>(`${API_CONFIG.baseUrl}/api/user/password`, data);
    }

    
}