// validators.ts
import { AbstractControl, ValidatorFn, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {SysUserService} from './sys-user.service'

// 用戶名驗證器
export function validUserNameValidator(sysUserService: SysUserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    console.log('Validating user name:', control.value); // 輸出當前用戶名
    if (!control.value) {
    of({ 'required': true }); // 如果沒有輸入值則返回 'required' 錯誤
    }
    return sysUserService.checkUserExist(control.value).pipe(
      map((userExists: boolean) => {
        console.log('User exists:', userExists); // 輸出用戶是否存在的結果
        return userExists ? { 'userNameExists': true } : null;
      }),
      catchError(() => {
        console.error('Error checking user existence'); // 錯誤日誌
        return of(null); // 返回 null 而不是錯誤，讓表單保持有效狀態
      })
    );
  };
}

//用戶密碼驗證
export function validPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    
    if (!value) {
      return { required: true };
    }

    
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const errors = {
      minLength: value.length < 8, // 檢查長度
      upperCase: !hasUpperCase, // 缺少大寫字母
      lowerCase: !hasLowerCase, // 缺少小寫字母
      numeric: !hasNumeric, // 缺少數字
      specialChar: !hasSpecialChar // 缺少特殊字符
    };

    // 如果有錯誤，返回格式化的錯誤信息
    if (Object.values(errors).some(error => error)) {
      return { passwordErrors: true };
    }

    return null; 
  };
}


