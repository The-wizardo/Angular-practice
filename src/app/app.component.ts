import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from './Component/user/user.component';
import {NgForComponent} from './Component/ng-for/ng-for.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent,NgForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-demo';
}
