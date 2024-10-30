import { Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../receptionist.model';
import { ReceptionistService } from '../receptionist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-updatereceptionist',
  templateUrl: './updatereceptionist.component.html',
  styleUrls: ['./updatereceptionist.component.css']
})
export class UpdateReceptionistComponent implements OnInit {
  receptionist: ReceptionistModel = new ReceptionistModel();

  constructor(
    private route: ActivatedRoute,
    private receptionistService: ReceptionistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.receptionistService.getReceptionist(id).subscribe({
        next: (data) => {
          this.receptionist = data;
        },
        error: error => {
          console.error('Error retrieving receptionist', error);
        }
      });
    }
  }

  updateReceptionist(): void {
    this.receptionistService.updateReceptionist(this.receptionist).subscribe(() => {
      this.router.navigate(['/viewrecep']);
    });
  }
}
