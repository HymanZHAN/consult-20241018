import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donor-add-edit',
  templateUrl: './donor-add-edit.component.html',
  styleUrls: ['./donor-add-edit.component.scss'],
})
export class DonorAddEditComponent implements OnInit {
  donorForm: FormGroup;
  isEditMode = false; // 判斷是新增還是編輯
  isSubmitting: boolean = false;//判斷是否提交處理中
  donorId: string | null = null; // 存放要編輯的 donor_id
  returnUrl: string = ''; // 設定返回頁面地址

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.donorForm = this.formBuilder.group({
      donor_id: ['', Validators.required], // 身份證字號
      donor_name: ['', Validators.required], // 姓名
      first: [false], // 第一次捐款
      addr_h: [''], // 居住地址
      send_journal: [false], // 郵寄刊物
      company: [''], // 公司
      taiwan: [false], // 是否居住台灣
      addr_o: [''], // 公司地址
      tel_h: [''], // 家裡電話
      tel_o: [''], // 公司電話
      m_phone: [''], // 手機
      email: [''], // Email
      receipt_id: [''], // 收據者身份證字號
      receipt_title: [''], // 收據者Title
      receipt_addr: [''], // 收據者地址
      memo: [''], // 備註
      autoFillReceipt: [false], // 新增的自動填入 Checkbox
    });
  }

  ngOnInit(): void {
    
  }

  // Checkbox 的改變事件處理
  onAutoFillChange(event: any) {
    
  }

  onSubmit() {
   
  }
  

  cancel() {
    
  }
}
