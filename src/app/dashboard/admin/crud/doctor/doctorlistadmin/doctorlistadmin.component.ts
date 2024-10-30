import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { DoctorModel } from '../doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorlistadmin',
  templateUrl: './doctorlistadmin.component.html',
  styleUrl: './doctorlistadmin.component.css'
})
export class DoctorlistadminComponent implements OnInit {
  doctors: DoctorModel[] = [];

  constructor(private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe({
      next: data => {
        this.doctors = data;
      },
      error: error => {
        console.error('Error retrieving doctors:', error)
      }
    });
  }

  deleteDoctor(id: string): void {
    this.doctorService.deleteDoctor(id).subscribe({
      next: () => {
        this.doctors = this.doctors.filter(doctor => doctor.id!== id);
      },
      error: error => {
        console.error('Error deleting doctor:', error)
      }
    });
  }

  updatedoctor(id: string){
    this.router.navigate(['updatedoctor/' + id]);
  }
}
