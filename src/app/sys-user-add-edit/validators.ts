// validators.ts
import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  AsyncValidatorFn,
  FormGroup,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SysUserService } from './sys-user.service';
import { convertToParamMap } from '@angular/router';

// 用戶名驗證器
export function validUserNameValidator(sysUserService: SysUserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return sysUserService.checkUserExist(control.value).pipe(
      map((userExists: boolean) => {
        console.log('User exists:', userExists); // 輸出用戶是否存在的結果
        return userExists ? { userNameExists: true } : null;
      }),
      catchError(() => {
        console.error('Error checking user existence'); // 錯誤日誌
        return of(null); // 返回 null 而不是錯誤，讓表單保持有效狀態
      }),
    );
  };
}

//用戶密碼驗證
export const validPasswordValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
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
    specialChar: !hasSpecialChar, // 缺少特殊字符
  };

  // 如果有錯誤，返回格式化的錯誤信息
  if (Object.values(errors).some((error) => error)) {
    return { passwordErrors: true };
  }

  return null;
};

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const fg = control as FormGroup;
  const confirmPasswordCtrl = fg.get('confirmPassword');

  // 優先展示FormControl上的已有錯誤
  if (!confirmPasswordCtrl || confirmPasswordCtrl.errors) return null;

  const password = fg.get('password')?.value;
  const confirmPassword = confirmPasswordCtrl.value;

  const error = confirmPassword === password ? null : { passwordMismatch: true };
  confirmPasswordCtrl.setErrors(error);
  return error;
};
