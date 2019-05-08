import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../../models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;

  token$: Observable<Token>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = 'jd';
    this.password = 'SecurePassword';
  }

  onSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    console.log('Submitting login....', user);

    this.token$ = this.authService.login(user);
  }

}
