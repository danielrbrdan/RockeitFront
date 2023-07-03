import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PatientDTO } from "src/app/models/dto/patient";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class PatientService {
    constructor(private http: HttpClient) { }

    basePath = "/patient";
    
    findAll(){
        return this.http.get(`${API_CONFIG.baseUrl}${this.basePath}`);
    }

    save(patient: PatientDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}${this.basePath}`, patient);
    }

    update(patient: PatientDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}${this.basePath}`, patient);
    }

    delete(id: any) {
        return this.http.delete(`${API_CONFIG.baseUrl}${this.basePath}/${id}`,{});
    }

}