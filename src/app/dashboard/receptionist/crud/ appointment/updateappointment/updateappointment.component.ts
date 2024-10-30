import { Component, OnInit } from '@angular/core';
import { RecepAppointment } from '../recepappointment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepappointmentService } from '../recepappointment.service';
import { response } from 'express';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrl: './updateappointment.component.css'
})
export class UpdateappointmentComponent implements OnInit {
  appointment: RecepAppointment = new RecepAppointment();

  constructor(
    private route: ActivatedRoute,
    private appointmentService: RecepappointmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.appointmentService.getAppointmentById(id).subscribe({
        next: data => {
          this.appointment = data;
        },
        error: error => {
          console.error('Error retrieving appointment', error);
        }
      });
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.appointmentService.updateAppointment(id, this.appointment).subscribe({
        next: response => {
          this.router.navigate(['/viewappointment']);
        },
        error: error => {
          console.error('Error updating appointment', error);
        }
      });
    }
  }
}
