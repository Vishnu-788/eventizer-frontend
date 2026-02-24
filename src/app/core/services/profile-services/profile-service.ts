import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import {UserProfile, UserProfilePayload} from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private http = inject(HttpClient)
  getUserProfile() {
    return this.http.get<UserProfile>(API_ENDPOINTS.MANAGE_USER_PROFILE)
  }

  updateUserProfile(user: UserProfilePayload) {
    return this.http.patch<UserProfile>(API_ENDPOINTS.MANAGE_USER_PROFILE, user)
  }
}
