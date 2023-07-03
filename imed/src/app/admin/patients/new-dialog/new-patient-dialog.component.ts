import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddressDTO } from 'src/app/models/dto/address';
import { PatientDTO } from 'src/app/models/dto/patient';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-new-patient-dialog',
  templateUrl: './new-patient-dialog.component.html',
  styleUrls: ['./new-patient-dialog.component.scss']
})
export class NewPatientDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewPatientDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private patientService: PatientService,
    private formBuilder: FormBuilder,
  ) { 
    if (data != null) {
      this.patientForm.patchValue(data);
    }
  }

  ngOnInit(): void {
  }

  patientForm = this.formBuilder.group({
    id: null,
    name: '',
    phone: '',
    address: this.formBuilder.group({
      city: '',
      country: '',
      postalCode: '',
      state: '',
      street: ''
    }),
  });

  onSubmit() {

    let patient: PatientDTO = {
      ...this.patientForm.value as unknown as PatientDTO,
      totalAppointment: 0
    };

    if (!this.data.id) {
      this.patientService.save(patient).subscribe((response: any)=>{
        this.close();
      });
    } else {
      this.patientService.update(patient).subscribe((response: any)=>{
        this.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
    this.patientForm.reset();
  }

}
