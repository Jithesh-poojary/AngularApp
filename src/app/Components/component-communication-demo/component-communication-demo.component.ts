import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SenderPanelComponent } from './sender-panel.component';
import { ReceiverPanelComponent } from './receiver-panel.component';

@Component({
  selector: 'app-component-communication-demo',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    SenderPanelComponent,
    ReceiverPanelComponent
  ],
  templateUrl: './component-communication-demo.component.html',
  styleUrls: ['./component-communication-demo.component.scss']
})
export class ComponentCommunicationDemoComponent {
  latestMessage = '';
  messageHistory: string[] = [];

  onMessageSent(message: string): void {
    this.latestMessage = message;
    this.messageHistory.unshift(message);
  }

  clearMessages(): void {
    this.latestMessage = '';
    this.messageHistory = [];
  }
}
