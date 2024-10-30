import { Component, OnInit } from '@angular/core';
import { RecepAppointment } from '../recepappointment.model';
import { RecepappointmentService } from '../recepappointment.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrl: './viewappointment.component.css'
})
export class ViewappointmentComponent implements OnInit {
  appointments: RecepAppointment[] = [];

  constructor(private appointmentService: RecepappointmentService, private router: Router) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe({
      next: data => {
        this.appointments = data;
      },
      error: error => {
        alert(error);
      }
    });
  }

  editAppointment(id: string): void {
    this.router.navigate(['/updateappointment', id]);
  }

  deleteAppointment(id: string): void {
    this.appointmentService.deleteAppointment(id).subscribe({
      next: response => {
        alert('Appointment deleted successfully');
        this.loadAppointments();
      },
      error: error => {
        alert(error);
      }
    });
  }
}
