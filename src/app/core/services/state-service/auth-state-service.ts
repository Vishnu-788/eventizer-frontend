import { Injectable } from '@angular/core';
import {UserModel} from '../../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private username: string | null = null;
  private access: string | null = null;
  private role: string | null = null;
  private isVerified: boolean = false;
  private firstName: string | null = null;
  private lastName: string | null = null;


  setCredentials = (data: UserModel): void => {
    this.username = data.username;
    this.access = data.access;
    this.role = data.role;
    this.isVerified = data.verified
    this.firstName = data.first_name
    this.lastName = data.last_name
  }

  setAccess(access: string) {
    this.access = access;
  }

  removeCredentials = () => {
    this.access = null;
    this.username = null;
    this.role = null;
    this.isVerified = false;
    this.firstName = null;
    this.lastName = null;
  }


  // getters
  getUsername = (): string | null => {return this.username;}
  getAccess = (): string | null => {return this.access;}
  getRole = (): string | null => {return this.role;}
  getFirstName = (): string | null => {return this.firstName;}
  getLastName = (): string | null => {return this.lastName;}
  verified (): boolean {return this.isVerified;}
}
