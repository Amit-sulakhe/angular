import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formspage',
  templateUrl: './formspage.component.html',
  styleUrls: ['./formspage.component.css'],
})
export class FormspageComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  login(loginFormVals: any) {
    console.log(loginFormVals);
  }
}
