import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };

    console.log('Submitting login....', user);
  }

}
