import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-receiver-panel',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './receiver-panel.component.html',
  styleUrls: ['./receiver-panel.component.scss']
})
export class ReceiverPanelComponent {
  @Input() latestMessage = '';
  @Input() history: string[] = [];
}
