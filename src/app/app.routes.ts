import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { FormTableDemoComponent } from './Components/form-table-demo/form-table-demo.component';
import { ComponentCommunicationDemoComponent } from './Components/component-communication-demo/component-communication-demo.component';
import { ProfileComponent } from './Components/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'form-table-demo', component: FormTableDemoComponent },
  { path: 'component-communication-demo', component: ComponentCommunicationDemoComponent },
  { path: 'profile', component: ProfileComponent }
];
