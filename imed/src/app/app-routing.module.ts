import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { ProfessionalsComponent } from './admin/professionals/professionals.component';
import { ConfigComponent } from './config/config.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'admin', component: AdminComponent,
    children: [
    { path: 'schedule', component: AppointmentsComponent },
    { path: 'professionals', component: ProfessionalsComponent },
    { path: 'patients', component: PatientsComponent },
  ],
    canActivate: [AuthGuardGuard]
  },
  
  { path: 'config', component: ConfigComponent , canActivate: [AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
