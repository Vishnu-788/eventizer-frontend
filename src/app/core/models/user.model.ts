export interface UserModel {
  username: string;
  access: string;
  role: string;
  verified: boolean;
  first_name: string;
  last_name: string;
}

export interface UserProfile {
  username: string;
  access: string;
  role: string;
  email: string;
  verified: boolean;
  first_name: string;
  last_name: string;
}

export interface UserProfilePayload {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}
