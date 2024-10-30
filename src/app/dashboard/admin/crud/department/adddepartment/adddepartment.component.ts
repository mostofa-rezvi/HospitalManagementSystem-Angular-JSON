import { Component } from '@angular/core';
import { DepartmentModel } from '../department.model';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrl: './adddepartment.component.css'
})
export class AdddepartmentComponent {

  department: DepartmentModel = new DepartmentModel();

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  adddepartment(): void {
    this.departmentService.addDepartment(this.department).subscribe(() => {
      this.router.navigate(['/viewdepartment']);
    });
  }
}
