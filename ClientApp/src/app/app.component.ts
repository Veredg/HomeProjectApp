import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    // call login and save token into local storage
    this.authService.login().subscribe(res => {
      if (res) {
        localStorage.setItem('token', res.token);
      }
    });
  }

}
