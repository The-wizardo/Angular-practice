import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ng-for',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
 jawad:string[]= ['India','NY','portugal','Russia']

  selectedItem:string = '';
    ngOnChanges() {
      console.log('Selected ID:', this.selectedItem);
    }

  employeeList:any[]=[
    {empid:1,name:"jawad",email:'jawad@correctcloud.io'},
    {empid:2,name:"Izhar Ahmed",email:'izhar@correctcloud.io'},
    {empid:344,name:"awais",email:'awais@correctcloud.io'}
  ]
  selectedEmpId: any='';

  onEmployeeSelect() {
    console.log('Selected Employee ID:', this.selectedEmpId);
  }
}
