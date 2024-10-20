import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../data.module';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*', minHeight: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
})
export class UserListComponent {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  expandedUserId: number | null = null; // 用於追蹤展開的用戶 ID

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  toggleAccordion(userId: number): void {
    this.expandedUserId = this.expandedUserId === userId ? null : userId;
  }

  isExpanded(userId: number): boolean {
    return this.expandedUserId === userId;
  }
}
