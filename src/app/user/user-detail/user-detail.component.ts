import { Component, Input } from '@angular/core';
import { User, Donation } from '../data.module';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  @Input() user!: User;
  donations: Donation[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.donations = this.userService.getDonationsByUserId(this.user.id);
  }
}
