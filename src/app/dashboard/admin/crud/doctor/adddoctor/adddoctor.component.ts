import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { DoctorModel } from '../doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrl: './adddoctor.component.css'
})
export class AdddoctorComponent {

  doctor: DoctorModel = new DoctorModel();

  constructor(private doctorService: DoctorService, private router: Router) { }

  addDoctor(): void {
    this.doctorService.addDoctor(this.doctor).subscribe(() => {
      this.router.navigate(['/viewdoctor']);
    });
  }
}
