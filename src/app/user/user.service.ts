import { Injectable } from '@angular/core';
import { User, Donation } from './data.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      phone: '1234567890',
      address: '123 Street',
      dob: '1990-01-01',
      gender: 'Female',
      company: 'Company A',
      position: 'Developer',
      joinDate: '2015-01-01',
      salary: 60000,
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      phone: '0987654321',
      address: '456 Street',
      dob: '1985-05-05',
      gender: 'Male',
      company: 'Company B',
      position: 'Manager',
      joinDate: '2010-06-01',
      salary: 80000,
    },
    // Add three more users similarly
  ];

  private donations: Donation[] = [
    {
      id: 1,
      userId: 1,
      amount: 100,
      date: '2024-08-01',
      type: 'Online',
      status: 'Completed',
    },
    {
      id: 2,
      userId: 1,
      amount: 200,
      date: '2024-08-15',
      type: 'Cash',
      status: 'Pending',
    },
    {
      id: 3,
      userId: 2,
      amount: 150,
      date: '2024-07-10',
      type: 'Check',
      status: 'Completed',
    },
    {
      id: 4,
      userId: 2,
      amount: 250,
      date: '2024-08-20',
      type: 'Online',
      status: 'Completed',
    },
    // Add more donations if needed
  ];

  getUsers(): User[] {
    return this.users;
  }

  getDonationsByUserId(userId: number): Donation[] {
    return this.donations.filter((donation) => donation.userId === userId);
  }
}
