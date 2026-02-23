import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {finalize, Observable, switchMap, tap} from 'rxjs';
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

  login (payload: LoginPayload): Observable<UserModel> {
    return this.http
      .post<UserModel>(API_ENDPOINTS.LOGIN, payload, {withCredentials: true})
      .pipe(
          tap(data => this.stateService.setCredentials(data))
      )
  }

  // Calling the login observable after successful registration to improve UX.
  signup (data: SignupPayload): Observable<UserModel>  {
    return this.http
      .post<SignUpResponse>(API_ENDPOINTS.SIGNUP, data)
      .pipe(
        switchMap(() => this.login({
          username: data.username,
          password: data.password,
        }))
      )
  }

  logout(){
    return this.http.post(API_ENDPOINTS.LOGOUT, {}, { withCredentials: true })
      .pipe(
        finalize(() => {
          this.clearCredentials()
        })
      )
  }

  // Checks whether the user is logged in or not.
  isAuthenticated = (): boolean => {return this.stateService.getUsername() !== null;}
  isHost = (): boolean => {return this.isAuthenticated() && this.stateService.getRole() === 'host'}
  isVerified = (): boolean => {return this.stateService.verified()}
  isAdmin = (): boolean => {return this.isAuthenticated() && this.stateService.getRole() === 'admin'}
  getUsername() {return this.stateService.getUsername()}
  getAccessToken(){return this.stateService.getAccess()}
  setAccessToken(token: string){this.stateService.setAccess(token)}
  getFullName() {return (this.stateService.getFirstName() + ' ' + this.stateService.getLastName())}
  getRole() {return this.stateService.getRole()}
  refreshToken(): Observable<any> {return this.http.post(API_ENDPOINTS.REFRESH_TOKEN, {}, { withCredentials: true });}
  setCredentials(payload: UserModel){this.stateService.setCredentials(payload)}
  clearCredentials() {this.stateService.removeCredentials()}
}
