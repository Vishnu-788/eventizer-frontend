import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import {AuthStateService} from '../state-service/auth-state-service';

// Accepting null because of passing form data the type is partial {string | null}
interface LoginPayload {
  username: string | null;
  password: string | null;
}

interface SignupPayload {
  username: string | null;
  email: string | null;
  password: string | null;
  role: string | null;
}

interface LoginResponse {
  access: string
  username: string
  role: string
  verified: boolean
}

interface SignUpResponse {
  id: string
  username: string
  role: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)
  private stateService = inject(AuthStateService)

  login =  (data: LoginPayload): Observable<LoginResponse> => {
    return this.http
      .post<LoginResponse>(API_ENDPOINTS.LOGIN, data)
      .pipe(
          tap(res => console.log(res))
      )
  }

  signup = (data: SignupPayload): Observable<any> => {
    return this.http.post<SignUpResponse>(API_ENDPOINTS.SIGNUP, data)
  }

  // Checks whether the user is logged in or not.
  isAuthenticated = (): boolean => {
    return this.stateService.getUsername() !== null;
  }

  isHost = (): boolean => {
    return this.isAuthenticated() && this.stateService.getRole() === 'host'
  }

  isAdmin = (): boolean => {
    return this.isAuthenticated() && this.stateService.getRole() === 'admin'
  }
}
