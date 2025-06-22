import { Routes } from '@angular/router';
import {UserComponent} from './Component/user/user.component';
import {NgForComponent} from './Component/ng-for/ng-for.component';
import {ControlStatementComponent} from './Component/control-statement/control-statement.component';

export const routes: Routes = [
  { path: '',
    redirectTo: 'User',
    pathMatch: 'full'
  },
  {
    path:"User",
    component:UserComponent
  },
  {
    path:"Ng-For",
    component:NgForComponent
  },
  {
    path:"Control-Statement",
    component:ControlStatementComponent
  }
];
