import { Component } from '@angular/core';
import { LoginModel } from '../Model/login.model';
import { AuthService } from '../../security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    protected authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
