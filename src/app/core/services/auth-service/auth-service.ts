import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap, tap} from 'rxjs';
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
  role: string;
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

  login (data: LoginPayload): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(API_ENDPOINTS.LOGIN, data, {withCredentials: true})
      .pipe(
          tap(data => this.stateService.setCredentials(data))
      )
  }

  // Calling the login observable after successful registration to improve UX.
  signup (data: SignupPayload): Observable<LoginResponse>  {
    return this.http
      .post<SignUpResponse>(API_ENDPOINTS.SIGNUP, data)
      .pipe(
        switchMap(() => this.login({
          username: data.username,
          password: data.password,
        }))
      )
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

  getAccessToken(){
    return this.stateService.getAccess()
  }
  setAccessToken = (token: string) => {
    this.stateService.setAccess(token)
  }

  logout(){
    console.log("User performed log ou")
  }

  refreshToken(): Observable<any> {
    return this.http.post(
      API_ENDPOINTS.REFRESH_TOKEN,
      {},
      { withCredentials: true }
    );
  }
}
