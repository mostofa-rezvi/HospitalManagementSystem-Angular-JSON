import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../Model/login.model';
import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  constructor(
    protected authService: AuthService
  ) { }

  ngOnInit(): void {

  }
}
