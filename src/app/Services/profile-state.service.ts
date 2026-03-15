import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface ProfileInfo {
  title: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  displayName: string;
}

const PROFILE_STORAGE_KEY = 'app.profile.info';

@Injectable({
  providedIn: 'root'
})
export class ProfileStateService {
  private readonly profileSubject = new BehaviorSubject<ProfileInfo>(this.loadProfile());

  profile$ = this.profileSubject.asObservable();

  topProfileText$ = this.profile$.pipe(
    map((profile) => {
      const name = profile.displayName.trim();
      const title = profile.title.trim();

      if (!name) {
        return 'Open Profile';
      }

      return title ? `Hi, ${title} ${name}` : `Hi, ${name}`;
    })
  );

  getCurrentProfile(): ProfileInfo {
    return this.profileSubject.value;
  }

  updateProfile(profile: ProfileInfo): void {
    this.profileSubject.next(profile);
    this.saveProfile(profile);
  }

  private loadProfile(): ProfileInfo {
    try {
      const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!raw) {
        return this.emptyProfile();
      }

      const parsed = JSON.parse(raw) as Partial<ProfileInfo>;
      return {
        title: parsed.title ?? 'Mr.',
        firstName: parsed.firstName ?? '',
        lastName: parsed.lastName ?? '',
        mobile: parsed.mobile ?? '',
        email: parsed.email ?? '',
        displayName: parsed.displayName ?? ''
      };
    } catch {
      return this.emptyProfile();
    }
  }

  private saveProfile(profile: ProfileInfo): void {
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // Ignore storage errors and keep in-memory state.
    }
  }

  private emptyProfile(): ProfileInfo {
    return {
      title: 'Mr.',
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      displayName: ''
    };
  }
}
