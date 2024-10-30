import { Component, OnInit } from '@angular/core';
import { NurseModel } from '../nurse.model';
import { NurseService } from '../nurse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurselistadmin',
  templateUrl: './nurselistadmin.component.html',
  styleUrl: './nurselistadmin.component.css'
})
export class NurselistadminComponent implements OnInit {
  nurses: NurseModel[] = [];

  constructor(private nurseService: NurseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadNurses();
  }

  updateNurse(id: string) {
    this.router.navigate(['updatenurse/' + id]);
  }

  deleteNurse(id: string) {
    if (confirm('Are you sure you want to delete this nurse?')) {
      this.nurseService.deleteNurse(id).subscribe(() => {
        this.loadNurses();
      });
    }
  }

  loadNurses() {
    this.nurseService.getNurses().subscribe({
      next: data => {
        this.nurses = data;
      },
      error: error => {
        console.error('Error fetching nurses', error);
      }
    });
  }
}
