import { Injectable } from '@angular/core';
interface Credentials {
  username: string;
  accessToken: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private username: string | null = null;
  private accessToken: string | null = null;
  private role: string | null = null;

  setCredentials = (data: Credentials): void => {
    this.username = data.username;
    this.accessToken = data.accessToken;
    this.role = data.role;
  }

  // getters
  getUsername = (): string | null => {return this.username;}
  getAccessToken = (): string | null => {return this.accessToken;}
  getRole = (): string | null => {return this.role;}
}
