import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputOutputCardComponent } from '../input-output-card/input-output-card.component';

@Component({
  selector: 'app-input-output-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    InputOutputCardComponent
  ],
  templateUrl: './input-output-demo.component.html',
  styleUrls: ['./input-output-demo.component.scss']
})
export class InputOutputDemoComponent {
  draftMessage = '';
  currentMessage = 'Hello from parent component';
  lastEvent = 'No child event yet';

  sendToChild(): void {
    this.currentMessage = this.draftMessage.trim() || 'Empty message from parent';
  }

  onLiked(message: string): void {
    this.lastEvent = `Child emitted liked event with: "${message}"`;
  }

  onMessageCleared(): void {
    this.currentMessage = '';
    this.lastEvent = 'Child emitted messageCleared event';
  }
}
