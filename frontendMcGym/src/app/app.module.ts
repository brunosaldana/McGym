import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Forgot1Component } from './components/forgot1/forgot1.component';
import { Forgot2Component } from './components/forgot2/forgot2.component';
import { MainComponent } from './components/main/main.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InicioComponent,
    Forgot1Component,
    Forgot2Component,
    MainComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([
      {path: '', component:
      InicioComponent},
        {path: 'employee', component:
      EmployeeComponent},
      {path: 'forgot1', component:
      Forgot1Component},
      {path: 'forgot2', component:
      Forgot2Component},
      {path: 'main', component:
      MainComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
