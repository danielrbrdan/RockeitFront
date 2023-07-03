import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProfessionalService } from 'src/services/professional.service';
import { NewPatientDialogComponent } from '../../patients/new-dialog/new-patient-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProfessionalDTO } from 'src/app/models/dto/professional';

@Component({
  selector: 'app-new-professionals-dialog',
  templateUrl: './new-professionals-dialog.component.html',
  styleUrls: ['./new-professionals-dialog.component.scss']
})
export class NewProfessionalsDialogComponent implements OnInit {

 
  constructor(
    public dialogRef: MatDialogRef<NewProfessionalsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private professionalService: ProfessionalService,
    private formBuilder: FormBuilder,
  ) { 
    if (data != null) {
      this.professionalForm.patchValue(data);
    }
  }

  ngOnInit(): void {
  }

  professionalForm = this.formBuilder.group({
    id: null,
    name: '',
    crm: 0
  });

  onSubmit() {
    let professional: ProfessionalDTO = {
      ...this.professionalForm.value as unknown as ProfessionalDTO,
    };

    if (!this.data.id) {
      this.professionalService.save(professional).subscribe((response: any)=>{
        this.close();
      });
    } else {
      this.professionalService.update(professional).subscribe((response: any)=>{
        this.close();
      });
    }
  }

  close() {
    this.dialogRef.close();
    this.professionalForm.reset();
  }
}
