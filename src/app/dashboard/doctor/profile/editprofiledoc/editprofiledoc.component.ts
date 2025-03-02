import { Component, OnInit } from '@angular/core';
import { DoctorProfileModel } from '../doctorprofile.model';
import { Router } from '@angular/router';
import { DoctorprofileService } from '../doctorprofile.service';

@Component({
  selector: 'app-editprofiledoc',
  templateUrl: './editprofiledoc.component.html',
  styleUrl: './editprofiledoc.component.css'
})
export class EditprofiledocComponent implements OnInit {
  profile!: DoctorProfileModel;

  constructor(private profileService: DoctorprofileService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (data: DoctorProfileModel) => {
        this.profile = data;
      },
      error: (error) => {
        console.error('Error retrieving profile', error);
      }
    });
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(() => {
      this.router.navigate(['doctorprofile']);
    });
  }
}
