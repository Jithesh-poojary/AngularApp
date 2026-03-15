import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EntriesTableComponent, UserEntry } from './entries-table.component';

@Component({
  selector: 'app-form-table-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    EntriesTableComponent
  ],
  templateUrl: './form-table-demo.component.html',
  styleUrls: ['./form-table-demo.component.scss']
})
export class FormTableDemoComponent implements OnInit, OnDestroy {
  formData = {
    name: '',
    email: '',
    role: '',
    city: ''
  };

  submittedEntries: UserEntry[] = [];

  ngOnInit(): void {
    console.log('Parent ngOnInit: form page initialized');
  }

  ngOnDestroy(): void {
    console.log('Parent ngOnDestroy: form page destroyed');
  }

  submitForm(): void {
    const name = this.formData.name.trim();
    const email = this.formData.email.trim();
    const role = this.formData.role.trim();
    const city = this.formData.city.trim();

    if (!name || !email || !role) {
      return;
    }

    const newEntry: UserEntry = {
      id: Date.now(),
      name,
      email,
      role,
      city: city || '-',
      createdAt: new Date().toLocaleString()
    };

    this.submittedEntries = [newEntry, ...this.submittedEntries];

    this.formData = {
      name: '',
      email: '',
      role: '',
      city: ''
    };
  }

  removeEntry(id: number): void {
    this.submittedEntries = this.submittedEntries.filter((entry) => entry.id !== id);
  }

  clearTable(): void {
    this.submittedEntries = [];
  }
}
