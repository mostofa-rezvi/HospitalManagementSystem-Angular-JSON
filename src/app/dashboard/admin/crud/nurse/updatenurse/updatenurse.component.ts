import { Component, OnInit } from '@angular/core';
import { NurseModel } from '../nurse.model';
import { NurseService } from '../nurse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatenurse',
  templateUrl: './updatenurse.component.html',
  styleUrl: './updatenurse.component.css'
})
export class UpdatenurseComponent implements OnInit{
  nurse: NurseModel = new NurseModel();

  constructor(
    private nurseService: NurseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.nurseService.getNurse(id).subscribe({
        next: (data) => {
          this.nurse = data;
        },
        error: (error) => {
          console.error('Error retrieving nurse:', error);
        }
      });
    }
  }

  updateNurse() {
    this.nurseService.updateNurse(this.nurse).subscribe(() => {
      this.router.navigate(['/viewnurse']);
    });
  }
}
