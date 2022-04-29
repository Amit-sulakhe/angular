import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LogInComponent {
  loginForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
    });
  }
  login(loginFormVals: any) {
    console.log(loginFormVals);
  }
}
