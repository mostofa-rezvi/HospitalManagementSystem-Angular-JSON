import { Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../receptionist.model';
import { Router } from '@angular/router';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-receptionistlistadmin',
  templateUrl: './receptionistlistadmin.component.html',
  styleUrl: './receptionistlistadmin.component.css'
})
export class ReceptionistlistadminComponent implements OnInit {
  receptionists: ReceptionistModel[] = [];

  constructor(private receptionistService: ReceptionistService, private router: Router) { }

  ngOnInit(): void {
    this.receptionistService.getReceptionists().subscribe({
      next: (data) => {
        this.receptionists = data;
      },
      error: (error) => {
        console.error('Error retrieving receptionists:', error);
      }
    });
  }

  deleteReceptionist(id: string): void {
    this.receptionistService.deleteReceptionist(id).subscribe({
      next: () => {
        this.receptionists = this.receptionists.filter(receptionist => receptionist.id!== id);
      },
      error: (error) => {
        console.error('Error deleting receptionist:', error);
      }
    });
  }

  updateReceptionist(id: string): void {
    this.router.navigate(['/updaterecep', id]);
  }
}
