import { Component, OnInit } from '@angular/core';
import { AdminProfileModel } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
  profile!: AdminProfileModel;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (data: AdminProfileModel) => {
        this.profile = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}