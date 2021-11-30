import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.email),
  });
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  games() {
    this.router.navigate(['/games']);
  }
}
