export interface HostDetail {
  user: number;

  username: string;
  first_name: string;
  last_name: string;
  email: string;

  company_name: string;
  company_contact_no: string;
  company_contact_email: string;

  status: 'pending' | 'approved' | 'rejected' | string;
}
