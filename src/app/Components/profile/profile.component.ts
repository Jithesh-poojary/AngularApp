import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProfileInfo, ProfileStateService } from '../../Services/profile-state.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: ProfileInfo = {
    title: 'Mr.',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    displayName: ''
  };

  savedMessage = '';

  constructor(private readonly profileStateService: ProfileStateService) {}

  ngOnInit(): void {
    this.profile = { ...this.profileStateService.getCurrentProfile() };
  }

  get avatarInitials(): string {
    const firstInitial = this.profile.firstName.trim().charAt(0).toUpperCase();
    const lastInitial = this.profile.lastName.trim().charAt(0).toUpperCase();
    const initials = `${firstInitial}${lastInitial}`.trim();

    return initials || 'U';
  }

  get profileHeaderName(): string {
    const name = `${this.profile.firstName} ${this.profile.lastName}`.trim();
    return name || 'Update your profile';
  }

  saveProfile(): void {
    if (!this.profile.displayName.trim()) {
      this.profile.displayName = `${this.profile.firstName} ${this.profile.lastName}`.trim();
    }

    this.profileStateService.updateProfile({ ...this.profile });
    this.savedMessage = 'Profile saved successfully.';
    setTimeout(() => {
      this.savedMessage = '';
    }, 2200);
  }
}
