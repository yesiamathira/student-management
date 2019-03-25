import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {LoginComponent} from './login/login.component';
const routes: Routes = [

  {
    path:"students",
  component:StudentsComponent
  
    },
    {
      path:"login",
    component:LoginComponent
    
      },
  
      {
        path:"dashboard",
      component: DashboardComponent
      
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
