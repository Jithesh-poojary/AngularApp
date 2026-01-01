import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'employees', component: EmployeeListComponent }
];
