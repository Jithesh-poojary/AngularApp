import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-simple-example',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.scss']
})
export class SimpleExampleComponent {
  name = 'Angular Learner';
  clickCount = 0;

  increaseCount(): void {
    this.clickCount++;
  }
}
