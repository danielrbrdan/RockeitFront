import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { FullCalendarModule } from '@fullcalendar/angular';


import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentService } from 'src/services/appointment.service';
import { AuthService } from 'src/services/AuthService';
import { ProfessionalService } from 'src/services/professional.service';
import { LoginService } from 'src/services/login.service';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthInterceptorInterceptorProvider } from './auth-interceptor.interceptor';
import { AdminComponent } from './admin/admin.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { PatientService } from 'src/services/patient.service';
import { ProfessionalsComponent } from './admin/professionals/professionals.component';
import { NewDialogComponent } from './admin/appointments/new-dialog/new-dialog.component';
import { NewPatientDialogComponent } from './admin/patients/new-dialog/new-patient-dialog.component';
import { NewProfessionalsDialogComponent } from './admin/professionals/new-professionals-dialog/new-professionals-dialog.component';
import { ComponentsComponent } from './components/components.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ConfigComponent } from './config/config.component';
import {MatIconModule} from '@angular/material/icon';




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PatientsComponent,
    AppointmentsComponent,
    AdminComponent,
    ProfessionalsComponent,
    NewDialogComponent,
    NewPatientDialogComponent,
    NewProfessionalsDialogComponent,
    ComponentsComponent,
    ConfirmDialogComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule
    
  ],
  providers: [
    AuthService,
    AuthGuardGuard,
    AuthInterceptorInterceptorProvider,
    LoginService,
    ProfessionalService,
    AppointmentService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
