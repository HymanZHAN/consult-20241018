import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SysUserService {
  private existingUsernames = ['admin', 'user1', 'user2'];

  checkUserExist(userName: string): Observable<boolean> {
    console.log('Checking username:', userName); // 輸出當前用戶名
    return of(this.existingUsernames.some((a) => a === userName)).pipe(delay(1000));
  }
}
