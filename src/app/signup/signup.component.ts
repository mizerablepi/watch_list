import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styles: ``,
})
export class SignupComponent {
  constructor(private router: Router, private auth: AuthService) {
    if (this.auth.checkUser()) {
      this.router.navigateByUrl('/');
    }
  }
}
