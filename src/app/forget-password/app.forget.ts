import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-forget',
  templateUrl: './app.forget.html',
  styleUrls: ['./app.forget.css']
})
export class ForgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  forget =new FormGroup({
      emailId:new FormControl('',Validators.required),
  })
  forgetSubmit(){
    
  }
}
