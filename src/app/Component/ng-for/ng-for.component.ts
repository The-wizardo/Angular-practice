import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [
    NgForOf
  ],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
 jawad:string[]= ['India','NY','portugal','Russia']
}
