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
import { ReservaComponent } from './components/reserva/reserva.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InicioComponent,
    Forgot1Component,
    Forgot2Component,
    MainComponent,
    ClienteComponent,
    ReservaComponent,
    PageNotFoundComponent
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
      {path: 'clientes', component:
      ClienteComponent},
      {path: 'forgot1', component:
      Forgot1Component},
      {path: 'forgot2', component:
      Forgot2Component},
      {path: 'main', component:
      MainComponent},
      {path: 'reserva', component:
      ReservaComponent},
      {path: '**', component:
       PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
