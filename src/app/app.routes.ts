import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { InputOutputDemoComponent } from './Components/input-output-demo/input-output-demo.component';
import { LifecycleHooksDemoComponent } from './Components/lifecycle-hooks-demo/lifecycle-hooks-demo.component';
import { SimpleExampleComponent } from './Components/simple-example/simple-example.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'input-output-demo', component: InputOutputDemoComponent },
  { path: 'lifecycle-hooks-demo', component: LifecycleHooksDemoComponent },
  { path: 'simple-example', component: SimpleExampleComponent }
];
