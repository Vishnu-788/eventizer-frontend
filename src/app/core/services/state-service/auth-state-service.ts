import { Injectable } from '@angular/core';
interface Credentials {
  username: string;
  access: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private username: string | null = null;
  private access: string | null = null;
  private role: string | null = null;

  setCredentials = (data: Credentials): void => {
    this.username = data.username;
    this.access = data.access;
    this.role = data.role;
  }

  // getters
  getUsername = (): string | null => {return this.username;}
  getAccess = (): string | null => {return this.access;}
  getRole = (): string | null => {return this.role;}
}
