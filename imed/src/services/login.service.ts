import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    HTTPOptions:Object = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        responseType: 'text'
    }

    newUser(login: String, password: String, name: String) {
        let data = { login: login, password: password, name: name}
        return this.http.post<String>(`${API_CONFIG.baseUrl}/api/user`, data);
    }

    login(login: String, password: String):Observable<Object>{
        let data = { login: login, password: password }
        
        return this.http.post<String>(`${API_CONFIG.baseUrl}/login`, data, this.HTTPOptions);
    }



}