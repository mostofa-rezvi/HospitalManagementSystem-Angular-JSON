import { Component, OnInit } from '@angular/core';
import { RecepappointmentService } from '../recepappointment.service';
import { RecepAppointment } from '../recepappointment.model';
import { Router } from '@angular/router';
import { DoctorService } from '../../../../admin/crud/doctor/doctor.service';
import { DepartmentService } from '../../../../admin/crud/department/department.service';
import { DoctorModel } from '../../../../admin/crud/doctor/doctor.model';
import { DepartmentModel } from '../../../../admin/crud/department/department.model';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrl: './addappointment.component.css'
})
export class AddappointmentComponent implements OnInit {

  appointment: RecepAppointment = new RecepAppointment();
  doctors: DoctorModel[] = [];
  departments: DepartmentModel[] = [];
  selectedDoctorId?: string;
  selectedDepartmentId?: string;

  constructor(
    private appointmentService: RecepappointmentService,
    private doctorService: DoctorService,
    private departmentService: DepartmentService,
     private router: Router
    ) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe({
      next: res => {
        this.doctors = res;
      },
      error: error => {
        alert(error);
      }
    })
    this.departmentService.getDepartments().subscribe({
      next: res => {
        this.departments = res;
      },
      error: error => {
        alert(error);
      }
    })
  }

  onSubmit(): void {
    if (this.selectedDoctorId && this.selectedDepartmentId) {
      const selectedDoctor = this.doctors.find(doc => doc.id === this.selectedDoctorId);
      const selectedDepartment = this.departments.find(dep => dep.id === this.selectedDepartmentId);

      if (selectedDoctor) {
        this.appointment.doctor = selectedDoctor;
      }
      if (selectedDepartment) {
        this.appointment.department = selectedDepartment;
      }

      this.appointmentService.addAppointment(this.appointment).subscribe({
        next: () => {
          alert('Appointment added successfully.');
          this.router.navigate(['/viewappointment']);
        },
        error: error => {
          alert(error);
        }
      });
    } else {
      alert('Please select both doctor and department.');
    }
  }
}
