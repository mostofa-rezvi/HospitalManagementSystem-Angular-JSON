import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { DepartmentModel } from '../department.model';

@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrl: './updatedepartment.component.css'
})
export class UpdatedepartmentComponent implements OnInit {
  departmentModel: DepartmentModel = {
    id: '',
    name: '',
    headOfDepartment: '',
    location: '',
    phone: '',
    email: '',
    numberOfDoctors: '',
    numberOfNurses: ''
  };

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadDepartment(id);
      }
    });
  }

  loadDepartment(id: string): void {
    this.departmentService.getDepartmentById(id).subscribe({
      next: department => {
        this.departmentModel = department;
      },
      error: error => {
        console.error('Error retrieving department:', error);
      }
    });
  }

  updateDepartment(): void {
    this.departmentService.updateDepartment(this.departmentModel).subscribe(() => {
      this.router.navigate(['/viewdepartment']);
    });
  }
}
