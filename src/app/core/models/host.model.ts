interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string; // ISO date string from backend
}

interface UserOptional {
  username: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
}

export interface HostModel {
  user: User;
  company_name: string;
  company_contact_email: string;
  company_contact_no: string;
  status: string;
}

export interface HostCompanyPayload {
  company_name: string;
  company_contact_email: string;
  company_contact_no: string;
}

export interface HostProfilePayload {
  user: UserOptional;
  company_name: string | undefined;
  company_contact_email: string | undefined;
  company_contact_no: string | undefined;
}
