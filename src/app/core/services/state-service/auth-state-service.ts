import { Injectable } from '@angular/core';
interface Credentials {
  username: string;
  access: string;
  role: string;
  verified: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private username: string | null = null;
  private access: string | null = null;
  private role: string | null = null;
  private isVerified: boolean = false;


  setCredentials = (data: Credentials): void => {
    this.username = data.username;
    this.access = data.access;
    this.role = data.role;
    this.isVerified = data.verified

    localStorage.setItem('username', data.username);
    localStorage.setItem('role', data.role)
    localStorage.setItem('isVerified', JSON.stringify(this.isVerified));
  }

  setAccess(access: string) {
    this.access = access;
  }

  removeCredentials = () => {
    this.access = null;
    this.username = null;
    this.role = null;
    this.isVerified = false;

    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('isVerified');
  }

  loadAuthStateFromLocalStorage = (accessToken: string) => {
    this.username = localStorage.getItem('username');
    this.access = accessToken
    this.role = localStorage.getItem('role');
    this.isVerified = localStorage.getItem('isVerified') === 'true'
  }

  // getters
  getUsername = (): string | null => {return this.username;}
  getAccess = (): string | null => {return this.access;}
  getRole = (): string | null => {return this.role;}
  verified (): boolean {return this.isVerified;}
}
