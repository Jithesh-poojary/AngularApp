import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface UserEntry {
  id: number;
  name: string;
  email: string;
  role: string;
  city: string;
  createdAt: string;
}

@Component({
  selector: 'app-entries-table',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './entries-table.component.html',
  styleUrls: ['./entries-table.component.scss']
})
export class EntriesTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() tableTitle = 'Entries';
  @Input() entries: UserEntry[] = [];

  @Output() deleteRequested = new EventEmitter<number>();
  @Output() clearRequested = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('Child ngOnInit: table component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entries']) {
      const total = this.entries.length;
      const message = changes['entries'].firstChange
        ? `Child ngOnChanges: initial entries count is ${total}`
        : `Child ngOnChanges: entries updated, count is now ${total}`;
      console.log(message);
    }
  }

  ngOnDestroy(): void {
    console.log('Child ngOnDestroy: table component destroyed');
  }

  requestDelete(id: number): void {
    this.deleteRequested.emit(id);
  }

  requestClear(): void {
    this.clearRequested.emit();
  }
}
