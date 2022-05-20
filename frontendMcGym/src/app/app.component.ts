import { AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directives';
import { Component } from '@angular/core';
import { TareaComponent } from './components/tareas/tareas.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
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
    generateComponent3(): void{

      const viewContainerRef = this.dynamic.viewContainerRef;

      const componentRef = viewContainerRef.createComponent<any>(TareaComponent);
    }
    
}

