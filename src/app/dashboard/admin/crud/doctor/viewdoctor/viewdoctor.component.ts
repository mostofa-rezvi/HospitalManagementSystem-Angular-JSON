import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../doctor.model';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrl: './viewdoctor.component.css'
})
export class ViewdoctorComponent implements OnInit {
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
