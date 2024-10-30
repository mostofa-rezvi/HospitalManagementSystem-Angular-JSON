import { Component } from '@angular/core';
import { NurseService } from '../nurse.service';
import { Router } from '@angular/router';
import { NurseModel } from '../nurse.model';

@Component({
  selector: 'app-addnurse',
  templateUrl: './addnurse.component.html',
  styleUrl: './addnurse.component.css'
})
export class AddnurseComponent {
  nurse: NurseModel = new NurseModel();

  constructor(private nurseService: NurseService, private router: Router) { }

  addNurse() {
    this.nurseService.addNurse(this.nurse).subscribe(() => {
      this.router.navigate(['/viewnurse']);
    });
  }
}
