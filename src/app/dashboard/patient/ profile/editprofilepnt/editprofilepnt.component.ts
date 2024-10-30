import { Component, OnInit } from '@angular/core';
import { PatientProfileModel } from '../../patientprofile.model';
import { PatientprofileService } from '../../patientprofile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofilepnt',
  templateUrl: './editprofilepnt.component.html',
  styleUrl: './editprofilepnt.component.css'
})
export class EditprofilepntComponent implements OnInit {
  profile!: PatientProfileModel;

  constructor(private profileService: PatientprofileService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (data: PatientProfileModel) => {
        this.profile = data;
      },
      error: (error) => {
        console.error('Error retrieving profile:', error);
      }
    });
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(() => {
      this.router.navigate(['patientprofile']); 
    });
  }
}
