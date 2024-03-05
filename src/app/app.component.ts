import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '@/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'watch_list';
  drawerOpen = false;
  loggedIn = false;

  constructor(private auth: AuthService) {}

  drawerClick() {
    this.drawerOpen = !this.drawerOpen;
  }

  ngOnInit(): void {
    if (this.auth.checkUser()) {
      this.loggedIn = true;
    }
  }

  logout() {
    this.drawerOpen = false;
    this.loggedIn = false;
  }
}
