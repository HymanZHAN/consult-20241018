import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SysUserService {
  private existingUsernames = ['admin', 'user1', 'user2'];

  checkUserExist(userName: string): Observable<boolean> {
    return of(this.existingUsernames.some((a) => a === userName)).pipe(delay(1000));
  }
}
