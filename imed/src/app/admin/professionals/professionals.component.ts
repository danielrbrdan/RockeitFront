import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProfessionalDTO } from 'src/app/models/dto/professional';
import { ProfessionalService } from 'src/services/professional.service';
import { NewProfessionalsDialogComponent } from './new-professionals-dialog/new-professionals-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {

  professionals: any;
  showConfirmationDialog = false;

  constructor(
    private professionalService: ProfessionalService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals() {
    this.professionalService.findAll().subscribe((response: any)=>{
      this.professionals = response
    });
  }

  addProfessional() {
    this.openPatientDialog(new ProfessionalDTO());
  }

  edit(patient: ProfessionalDTO) {
    this.openPatientDialog(patient);
  }

  openPatientDialog(patient: ProfessionalDTO) {
    const dialogRef = this.dialog.open(NewProfessionalsDialogComponent,{
      data: patient,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadProfessionals();
    });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result){
        return;
      }

      this.professionalService.delete(id).subscribe((response: any)=>{
        this.loadProfessionals();
      });
      
    });
  }

}
