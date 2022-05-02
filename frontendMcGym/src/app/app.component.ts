import { AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from './components/employee/employee.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directives';
import { Component } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';


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

}
