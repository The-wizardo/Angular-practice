import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent {

  constructor() {
    console.log("User Component initialize")
  }

  email:string = ''
  password:string=''
  address: string=''
  address1:string=''
  city:string=''
  state:string=''
  zip:string=''

  submitted:boolean=false


  showingData() {
    this.submitted=true
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Address:', this.address);
    console.log('Address Line 2:', this.address1);
    console.log('City:', this.city);
    console.log('State:', this.state);
    console.log('ZIP:', this.zip);
  }
}
