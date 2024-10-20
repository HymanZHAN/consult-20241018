export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  gender: string;
  company: string;
  position: string;
  joinDate: string;
  salary: number;
}
export interface Donation {
  id: number;
  userId: number;
  amount: number;
  date: string;
  type: string;
  status: string;
}
