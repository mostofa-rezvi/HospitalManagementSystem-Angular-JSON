import { Component, OnInit } from '@angular/core';
import { RecepAppointment } from '../../dashboard/receptionist/crud/ appointment/recepappointment.model';
import { ProfileService } from '../../dashboard/admin/profile/profile.service';
import { RecepappointmentService } from '../../dashboard/receptionist/crud/ appointment/recepappointment.service';
import { AppointmenthomeService } from '../homeAppointment/appointmenthome.service';

@Component({
  selector: 'app-lastappointment',
  templateUrl: './lastappointment.component.html',
  styleUrl: './lastappointment.component.css'
})
export class LastappointmentComponent implements OnInit {
  appointments: RecepAppointment[] = [];
  latestAppointment: RecepAppointment | null = null;
  recentAppointment: any;

  constructor(
    // private profileService: ProfileService,
    private recepAppointmentServeice: RecepappointmentService
  ) { }

  ngOnInit(): void {
    this.recepAppointmentServeice.getMostRecentAppointment().subscribe(appointment => {
      this.recepAppointmentServeice = appointment;
    });

    this.loadAppointments();
    this.loadMostRecentAppointment();
  }

  loadAppointments(): void {
    this.recepAppointmentServeice.getAppointments()
      .subscribe({
        next: (data: RecepAppointment[]) => {
          this.appointments = data;

          this.latestAppointment = this.appointments.find(appointment =>
            appointment.patientName &&
            appointment.department.name &&
            appointment.doctor.firstname && appointment.doctor.lastname &&
            appointment.appointmentDate &&
            appointment.appointmentTime
          ) || null;
        }
      });
  }

  loadMostRecentAppointment(): void {
    this.recepAppointmentServeice.getMostRecentAppointment().subscribe(appointment => {
      this.recentAppointment = appointment;
    });
  }

  onNewAppointmentCreated(newAppointment: any): void {
    this.recepAppointmentServeice.getMostRecentAppointment().subscribe(appointment => {
      this.recentAppointment = appointment;
    });
  }
}
