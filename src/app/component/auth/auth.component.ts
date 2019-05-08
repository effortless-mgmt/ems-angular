import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../../models/user';
import { AuthState, getToken } from 'src/app/reducers/auth.reducer';
import { Store } from '@ngrx/store';
import * as authActions from '../../actions/auth.action';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;

  token$: Observable<Token>;

  constructor(private store: Store<AuthState>) {
    this.token$ = this.store.select(getToken);
  }

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

    this.store.dispatch(new authActions.Authenticate(user));
  }

}
