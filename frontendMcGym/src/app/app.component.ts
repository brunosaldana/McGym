import { AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directives';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(DynamicComponentDirective) dynamic !: DynamicComponentDirective;

  ngAfterViewInit(): void{
    this.generateComponent();
  }

    generateComponent(): void{

      const viewContainerRef = this.dynamic.viewContainerRef;

      const componentRef = viewContainerRef.createComponent<any>(EmployeeComponent);
    }
    generateComponent2(): void{

      const viewContainerRef = this.dynamic.viewContainerRef;

      const componentRef = viewContainerRef.createComponent<any>(ClienteComponent);
    }

}
