import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sender-panel',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './sender-panel.component.html',
  styleUrls: ['./sender-panel.component.scss']
})
export class SenderPanelComponent {
  messageDraft = '';

  @Output() messageSent = new EventEmitter<string>();

  send(): void {
    const value = this.messageDraft.trim();
    if (!value) {
      return;
    }

    this.messageSent.emit(value);
    this.messageDraft = '';
  }
}
