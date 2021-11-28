import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.email)
  })
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
 

}
