import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lifecycle-tracker',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lifecycle-tracker.component.html',
  styleUrls: ['./lifecycle-tracker.component.scss']
})
export class LifecycleTrackerComponent
  implements
    OnChanges,
    OnInit,
    OnDestroy {
  @Input() counter = 0;

  events: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      const change = changes['counter'];
      const message = change.firstChange
        ? `ngOnChanges: initial counter = ${change.currentValue}`
        : `ngOnChanges: counter changed to ${change.currentValue}`;
      this.addEvent(message);
    }
  }

  ngOnInit(): void {
    this.addEvent('ngOnInit: child component initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: child component destroyed');
  }

  private addEvent(message: string): void {
    this.events.unshift(message);
  }
}
