import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.components.html',
  styleUrls: ['./signup.components.css'],
})
export class SignUpComponent {
  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log(`There is probleme with the form`);
    }
  }
}
