import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {AuthService} from '../auth-service/auth-service';
import {API_ENDPOINTS} from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class SessionRestoreService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  async restoreSession(): Promise<void> {

    try {
      const response = await firstValueFrom(
        this.http.post<UserModel>(
          API_ENDPOINTS.REFRESH_TOKEN,
          {},
          {withCredentials: true}
        )
      );
      // Set global state
      console.log("Refresh token is there and the auth is setting. LOG FROM SESSION_RESTORE_SERVICE")
      this.authService.setCredentials(response)
    } catch {
      // If refresh fails → clear state
      console.log("Refresh token is not there. LOG FROM SESSION RESTORE SERVICE")
      this.authService.clearCredentials();
    }
  }
}
