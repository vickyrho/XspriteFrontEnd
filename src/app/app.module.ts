import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { CompanyComponent } from './company/company.component';
import { UniversityComponent } from './university/university.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    CompanyComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
