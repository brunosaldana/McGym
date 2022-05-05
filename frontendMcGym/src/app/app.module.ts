import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Forgot1Component } from './components/forgot1/forgot1.component';
import { Forgot2Component } from './components/forgot2/forgot2.component';
import { MainComponent } from './components/main/main.component';
import { ClienteComponent } from './components/cliente/cliente.component';
<<<<<<< HEAD
=======
import { ReservaComponent } from './components/reserva/reserva.component';
>>>>>>> e6b5e07cb68a9db58fe77272af6b16bdf5b6e13c

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InicioComponent,
    Forgot1Component,
    Forgot2Component,
    MainComponent,
    ClienteComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    
    RouterModule.forRoot([
      {path: '', component:
      InicioComponent},
        {path: 'empleados', component:
      EmployeeComponent},
      {path: 'forgot1', component:
      Forgot1Component},
      {path: 'forgot2', component:
      Forgot2Component},
      {path: 'main', component:
      MainComponent},
<<<<<<< HEAD
      {path: 'clientes', component:
      ClienteComponent}
=======
      {path: 'reserva', component:
      ReservaComponent}
>>>>>>> e6b5e07cb68a9db58fe77272af6b16bdf5b6e13c
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
