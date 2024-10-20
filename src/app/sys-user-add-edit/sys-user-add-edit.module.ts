import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SysUserAddEditComponent } from './sys-user-add-edit.component'; // 引入您的組件
import { SysUserService } from './sys-user.service'; // 引入服務

@NgModule({
  declarations: [
     
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // 支持響應式表單
    FormsModule, // 支持模板驅動的表單
    MatFormFieldModule, // 使用 Material Design 的表單框架
    MatInputModule, // 使用 Material Design 的輸入控件
    MatButtonModule, // 使用 Material Design 的按鈕
    MatSlideToggleModule, // 使用滑動開關
    MatDialogModule, // 使用 Material 的對話框
    MatIconModule, // 使用 Material 的圖標
  ],
  providers: [
    SysUserService // 提供服務，確保可以在模組中使用
  ]
})
export class SysUserAddEditModule { }
