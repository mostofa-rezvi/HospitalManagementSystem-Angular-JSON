import { Component, OnInit } from '@angular/core';
import { PatientProfileModel } from '../../patientprofile.model';
import { PatientprofileService } from '../../patientprofile.service';

@Component({
  selector: 'app-myprofilepnt',
  templateUrl: './myprofilepnt.component.html',
  styleUrl: './myprofilepnt.component.css'
})
export class MyprofilepntComponent implements OnInit {
  profile!: PatientProfileModel;

  constructor(private profileService: PatientprofileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (data: PatientProfileModel) => {
        this.profile = data;
      },
      error: (error) => console.error('Error:', error)
    });
  }
}
