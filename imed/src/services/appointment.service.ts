import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppointmentDTO } from "src/app/models/dto/appointment";
import { API_CONFIG } from "src/config/api.config";

@Injectable()   
export class AppointmentService {

    constructor(private http: HttpClient) { }

    basePath = "/appointments";

    deleteApp(id: any) {
        return this.http.delete(`${API_CONFIG.baseUrl}${this.basePath}/${id}`,{});
    }

    findAllByProfessionalIdAndTime(id: any, date: string) {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}${this.basePath}/${id}/${date}`);
    }

    findAll() {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}${this.basePath}`);
    }

    save(appointment: AppointmentDTO) {
        return this.http.post<String>(`${API_CONFIG.baseUrl}${this.basePath}`, appointment);
    }

    update(appointment: AppointmentDTO) {
        return this.http.put<void>(`${API_CONFIG.baseUrl}${this.basePath}`, appointment);
    }



}