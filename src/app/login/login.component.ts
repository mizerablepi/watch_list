import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {
    if (this.auth.checkUser()) {
      this.router.navigateByUrl('/');
    }
  }
  ngOnInit(): void {}
}
