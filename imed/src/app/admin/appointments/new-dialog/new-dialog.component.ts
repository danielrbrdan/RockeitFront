import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppointmentDTO } from 'src/app/models/dto/appointment';
import { PatientDTO } from 'src/app/models/dto/patient';
import { ProfessionalDTO } from 'src/app/models/dto/professional';
import { AppointmentService } from 'src/services/appointment.service';
import { PatientService } from 'src/services/patient.service';
import { ProfessionalService } from 'src/services/professional.service';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {
  patients: any;
  professionals: any;

  constructor(
    public dialogRef: MatDialogRef<NewDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private professionalService: ProfessionalService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.patientService.findAll().subscribe((response: any)=>{
      this.patients = response
    });

    this.professionalService.findAll().subscribe((response: any)=>{
      this.professionals = response
    });
  }

  appointmentForm = this.formBuilder.group({
    appointmentId: null,
    professional: 0,
    patient: 0,
    appointmentTime: '',
    observation: ''
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveApp() {
    console.log(this.appointmentForm.value);
    let date = new Date(this.data.date);
    let [hour, minute] = this.appointmentForm.value.appointmentTime!.split(':')
    date.setHours(parseInt(hour)-3);
    date.setMinutes(parseInt(minute));

    let appointment = new AppointmentDTO();
    appointment.patient.id = this.appointmentForm.value.patient!
    appointment.professional.id = this.appointmentForm.value.professional!
    appointment.dateTime = date;
    appointment.observation = this.appointmentForm.value.observation!

    this.appointmentService.save(appointment).subscribe(response=>{
      this.dialogRef.close();
    });
  }

}
