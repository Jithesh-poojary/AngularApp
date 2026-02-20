import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LifecycleTrackerComponent } from '../lifecycle-tracker/lifecycle-tracker.component';

@Component({
  selector: 'app-lifecycle-hooks-demo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, LifecycleTrackerComponent],
  templateUrl: './lifecycle-hooks-demo.component.html',
  styleUrls: ['./lifecycle-hooks-demo.component.scss']
})
export class LifecycleHooksDemoComponent {
  counter = 0;
  showChild = true;

  incrementCounter(): void {
    this.counter++;
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
  }
}
