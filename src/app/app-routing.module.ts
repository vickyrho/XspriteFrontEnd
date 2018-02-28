import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule,Routes} from '@angular/router';
import {UniversityComponent} from './university/university.component';
import {StudentComponent} from './student/student.component';
import {CompanyComponent} from './company/company.component';

const routes: Routes = [
  { path :'', redirectTo:'/login',pathMatch:'full'},
  { path :'login',component:LoginComponent },
  { path :'register',component: RegisterComponent},
  { path :'university', component: UniversityComponent},
  { path :'student',component:StudentComponent },
  { path :'company',component:CompanyComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
