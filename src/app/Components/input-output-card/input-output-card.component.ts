import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-output-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './input-output-card.component.html',
  styleUrls: ['./input-output-card.component.scss']
})
export class InputOutputCardComponent {
  @Input() title = 'Child Card';
  @Input() message = '';
  @Output() liked = new EventEmitter<string>();
  @Output() messageCleared = new EventEmitter<void>();

  onLike(): void {
    this.liked.emit(this.message || 'No message available');
  }

  onClear(): void {
    this.messageCleared.emit();
  }
}
