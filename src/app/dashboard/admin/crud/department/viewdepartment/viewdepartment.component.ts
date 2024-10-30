import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../department.model';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrl: './viewdepartment.component.css'
})
export class ViewdepartmentComponent implements OnInit {
  departments: DepartmentModel[] = [];

  constructor(private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: err => {
        console.error('Error retrieving departments', err);
      }
    });
  }

  deleteDepartment(id: string): void {
    this.departmentService.deleteDepartment(id).subscribe({
      next: () => {
        console.log('Department deleted successfully');
        this.departments = this.departments.filter(department => department.id!== id);
      },
      error: err => {
        console.error('Error deleting department', err);
      }
    });
  }

  updatedepartment(id: string){
    this.router.navigate([`/updatedepartment/${id}`]);
  }
}
