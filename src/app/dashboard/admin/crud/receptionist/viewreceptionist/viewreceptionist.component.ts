import { Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../receptionist.model';
import { ReceptionistService } from '../receptionist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewreceptionist',
  templateUrl: './viewreceptionist.component.html',
  styleUrls: ['./viewreceptionist.component.css']
})
export class ViewReceptionistComponent implements OnInit {
  receptionists: ReceptionistModel[] = [];

  constructor(private receptionistService: ReceptionistService, private router: Router) { }

  ngOnInit(): void {
    this.receptionistService.getReceptionists().subscribe({
      next: data => {
        this.receptionists = data;
      },
      error: error => {
        console.error('Error retrieving receptionists', error);
      }
    });
  }

  deleteReceptionist(id: string): void {
    this.receptionistService.deleteReceptionist(id).subscribe({
      next: response => {
        console.log('Receptionist deleted successfully');
        this.receptionists = this.receptionists.filter(receptionist => receptionist.id !== id);
      },
      error: error => {
        console.error('Error deleting receptionist', error);
      }
    });
  }

  updateReceptionist(id: string): void {
    this.router.navigate(['/updaterecep', id]);
  }
}
