import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProfessionalDTO } from "src/app/models/dto/professional";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class ProfessionalService {
    constructor(private http: HttpClient) { }

    basePath = "/professional";
    
    findAll() {
        return this.http.get(`${API_CONFIG.baseUrl}${this.basePath}`);
    }

    save(professional: ProfessionalDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}${this.basePath}`, professional);
    }

    update(professional: ProfessionalDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}${this.basePath}`, professional);
    }

    delete(id: any) {
        return this.http.delete(`${API_CONFIG.baseUrl}${this.basePath}/${id}`,{});
    }

}