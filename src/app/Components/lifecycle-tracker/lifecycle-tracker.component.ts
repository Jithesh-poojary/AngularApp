import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
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
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() counter = 0;

  doCheckCount = 0;
  contentCheckedCount = 0;
  viewCheckedCount = 0;
  logs: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      this.logs.unshift(`ngOnChanges: counter -> ${changes['counter'].currentValue}`);
    }
  }

  ngOnInit(): void {
    this.logs.unshift('ngOnInit called');
  }

  ngDoCheck(): void {
    this.doCheckCount++;
  }

  ngAfterContentInit(): void {
    this.logs.unshift('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    this.contentCheckedCount++;
  }

  ngAfterViewInit(): void {
    this.logs.unshift('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    this.viewCheckedCount++;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called for LifecycleTrackerComponent');
  }
}
