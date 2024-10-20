import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SysUserService } from './sys-user.service'; // 引入 SysUserService
import { validPasswordValidator, validUserNameValidator } from './validators';
@Component({
  selector: 'app-sys-user-add-edit',
  templateUrl: './sys-user-add-edit.component.html',
  styleUrls: ['./sys-user-add-edit.component.scss'],
})
export class SysUserAddEditComponent implements OnInit, AfterViewInit {
  userForm: FormGroup;
  passwordVisible: boolean = false; // 用於跟踪密碼的可見性
  isEditMode: boolean = false; // 用於跟踪是否處於編輯模式

  constructor(
    private fb: FormBuilder,
    private sysUserService: SysUserService, // 注入 SysUserService
  ) {
    this.userForm = this.fb.group({
      user_id: [],
      // user_name: ['', [validUserNameValidator(this.sysUserService)]],
      user_name: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [validUserNameValidator(this.sysUserService)],
        },
      ],
      password: ['', [validPasswordValidator()]],
      create_time: [],
      valid: [true],
      role: [true],
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
    }, 0);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible; // 切換密碼可見性
  }

  saveUser() {
    if (this.userForm.valid) {
      alert('success');
    }
  }

  closeDialog() {}
}
