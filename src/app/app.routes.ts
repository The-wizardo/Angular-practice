import { Routes } from '@angular/router';
import {UserComponent} from './Component/user/user.component';
import {NgForComponent} from './Component/ng-for/ng-for.component';

export const routes: Routes = [
  {
    path:"User",
    component:UserComponent
  },
  {
    path:"Ng-For",
    component:NgForComponent
  }
];
