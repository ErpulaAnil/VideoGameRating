import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // public data = {
  //   text : '',
  //   email : '',
  //   tel : '',
  //   password : ''

  // }
  // valid = {
  //   text: true,
  //   email: true,
  //   password: true,
  // };
  // constructor() { }

  // ngOnInit(): void {
  // }
  // validate(type: string): void {
  //   const usernamePattern = /^[a-zA-Z]+$/;
  //   const emailPattern = /\S+@\S+\.\S+/;

  //   if (type === 'text') {
  //     if (this.data.text.length < 3) {
  //       this.valid.text = false;
  //     } else {
  //       this.valid.text = usernamePattern.test(this.data.text);
  //     }
  //   } else if (type === 'email') {
  //     this.valid.email = emailPattern.test(this.data.email);
  //   } else if (type === ('password' || 'password')) {
  //     if (this.data.password === this.data.password) {
  //       this.valid.password = true;
  //     } else {
  //       this.valid.password = false;
  //     }
  //   }
  // }

  // onKey(event: any, type: string) {
  //   if (type === 'text') {
  //     this.data.text = event.target.value;
  //   } else if (type === 'email') {
  //     this.data.email = event.target.value;
  //   } else if (type === 'tel') {
  //     this.data.password = event.target.value;
  //   } else if (type === 'password') {
  //     this.data.password = event.target.value;
  //   }
  //   this.validate(type);
  // }
  
}
