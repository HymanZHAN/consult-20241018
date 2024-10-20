// donation-search.component.ts
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
export interface Donation {
  cash: number;
  cashChinese: string;
  cash_chinese: string;
  company: string;
  donatedMethod: string;
  donatedMethodDesc: string;
  donated_method: string;
  donated_method_desc: string;
  donationDate: string;
  donation_no: string;
  donation_date: string;
  donorId: string;
  donorName: string;
  donor_id: string;
  donor_name: string;
  receiptKind: string;
  receipt_kind: string;
}

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  queryForm: FormGroup;
  isLoading: boolean = false;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'donation_no',
    'donation_date',
    'donor_id',
    'donor_name',
    'company',
    'cash',
    'cash_chinese',
    'receipt_kind',
    'donated_method',
    'donated_method_desc',
  ];
  donationList: Donation[] = [
    {
      cash: 1234567,
      cashChinese: '壹佰貳拾叁萬肆仟伍佰陸拾柒元整',
      cash_chinese: '壹佰貳拾叁萬肆仟伍佰陸拾柒元整',
      company: 'TechCorp',
      donatedMethod: '2',
      donatedMethodDesc: '現金捐款',
      donated_method: '2',
      donated_method_desc: '現金捐款',
      donationDate: '2023-12-20',
      donation_no: '330c8378-6c69-11ef-aaad-0a002700000f',
      donation_date: '2023-12-20',
      donorId: 'A123456789',
      donorName: 'John Doe',
      donor_id: 'A123456789',
      donor_name: 'John Doe',
      receiptKind: 'Y',
      receipt_kind: 'Y',
    },
    {
      cash: 987654,
      cashChinese: '玖拾捌萬柒仟陸佰伍拾肆元整',
      cash_chinese: '玖拾捌萬柒仟陸佰伍拾肆元整',
      company: 'InnovateInc',
      donatedMethod: '1',
      donatedMethodDesc: '支票捐款',
      donated_method: '1',
      donated_method_desc: '支票捐款',
      donationDate: '2024-01-15',
      donation_no: '440c8378-6c69-11ef-aaad-0a0027000010',
      donation_date: '2024-01-15',
      donorId: 'B987654321',
      donorName: 'Jane Smith',
      donor_id: 'B987654321',
      donor_name: 'Jane Smith',
      receiptKind: 'N',
      receipt_kind: 'N',
    },
    {
      cash: 12345,
      cashChinese: '壹萬貳仟參佰肆拾伍元整',
      cash_chinese: '壹萬貳仟參佰肆拾伍元整',
      company: 'GlobalTech',
      donatedMethod: '4',
      donatedMethodDesc: '電匯捐款',
      donated_method: '4',
      donated_method_desc: '電匯捐款',
      donationDate: '2024-02-10',
      donation_no: '550c8378-6c69-11ef-aaad-0a0027000011',
      donation_date: '2024-02-10',
      donorId: 'C135792468',
      donorName: 'Alice Johnson',
      donor_id: 'C135792468',
      donor_name: 'Alice Johnson',
      receiptKind: 'Y',
      receipt_kind: 'Y',
    },
  ];

  constructor(private fb: FormBuilder) {
    // 初始化表单
    this.queryForm = this.fb.group({
      donation_no: [null],
      donor_id: [null],
      min_amount: [null],
      max_amount: [null],
      start_date: [null],
      end_date: [null],
      donated_method: [null],
      receipt_kind: [null],
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.donationList);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSubmit() {}
  cancel() {}
}
