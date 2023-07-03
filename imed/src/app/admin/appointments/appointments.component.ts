import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import { AppointmentService } from 'src/services/appointment.service';
import { AppDialogComponent } from './app-dialog/app-dialog.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] | undefined;

  constructor(
    private appointmentService: AppointmentService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.appointmentService.findAll().subscribe(response=>{
      this.appointments = response; 
      let events: { title: string; date: any; eventId: any;}[] = [];
      response.forEach(app => {
        events.push({title: 'Sr.(a): '+app.patient.name+'. Às: '+app.dateTime, date: app.dateTime, eventId: app.id })
      });
      this.calendarOptions.events = events;
    });
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    eventClick:this.eventClick.bind(this),
    events: []
  };

  handleDateClick(arg: Object) {
    const dialogRef = this.dialog.open(NewDialogComponent,{
      data: arg,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }
  
  eventClick(arg: EventClickArg) {
    this.openDialog(this.appointments?.find(i => i.id == arg.event._def.extendedProps['eventId']))
  }

  openDialog(arg:Object){
    const dialogRef = this.dialog.open(AppDialogComponent,{
      data: arg,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

}
