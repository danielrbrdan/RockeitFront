import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddressDTO } from 'src/app/models/dto/address';
import { PatientDTO } from 'src/app/models/dto/patient';
import { AppointmentService } from 'src/services/appointment.service';
import { PatientService } from 'src/services/patient.service';
import { NewPatientDialogComponent } from './new-dialog/new-patient-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients!: PatientDTO[];

  constructor(
    private patientService: PatientService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.findAll().subscribe((response: any)=>{
      this.patients = response
    });
  }

  addPatient() {
    this.openPatientDialog(new PatientDTO());
  }

  edit(patient: PatientDTO) {
    this.openPatientDialog(patient);
  }

  openPatientDialog(patient: PatientDTO) {
    const dialogRef = this.dialog.open(NewPatientDialogComponent,{
      data: patient,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadPatients();
    });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result){
        return;
      }

      this.patientService.delete(id).subscribe((response: any)=>{
        this.loadPatients();
      });
      
    });
  }
}
