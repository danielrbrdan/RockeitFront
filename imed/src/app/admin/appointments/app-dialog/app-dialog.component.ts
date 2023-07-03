import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentDTO } from 'src/app/models/dto/appointment';
import { AppointmentService } from 'src/services/appointment.service';

@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogComponent implements OnInit {

  changed = false;

  constructor(
    public dialogRef: MatDialogRef<AppDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder,
    ) {
      if (data != null) {
        this.appointmentForm.patchValue(data);
      }
    }

  ngOnInit(): void {
  }

  appointmentForm = this.formBuilder.group({
    id: null,
    observation: ''
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteApp(){
    this.appointmentService.deleteApp(this.data.id).subscribe(response=>{
      this.dialogRef.close();
    });
  }

  formatDateTime(dateTime: Date) {
    let date = new Date(dateTime);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
  }


  updateApp() {
    let appointment: AppointmentDTO = {
      ...this.appointmentForm.value as unknown as AppointmentDTO,
    };

    this.appointmentService.update(appointment).subscribe(response=>{
      this.changed = false;
    });
  }

  onObsChange(value: any){
    this.changed = true;
  }
}
