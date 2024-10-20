import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-donation-credit-card-add-edit',
  templateUrl: './donation-credit-card-add-edit.component.html',
  styleUrls: ['./donation-credit-card-add-edit.component.scss'],
})
export class DonationCreditCardAddEditComponent implements OnInit {
  donationCreditCardForm: FormGroup;
  cd_id: string = '';
  isEditMode = false;
  isSubmitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.donationCreditCardForm = this.formBuilder.group({
      cd_id: ['', Validators.required],
      cd_authori_id: ['', Validators.required],
      cd_valid_year: [''],
      cd_valid_month: [''],
      receipt_kind: [''],
      cd_amount: [''],
      donation_start_YM: [''],
      donation_end_YM: [''],
      donor_id: [''],
      memo: [''],
    });
  }

  ngOnInit(): void {}

  searchDonor(donorId: string): void {}

  onSubmit(): void {}

  cancel(): void {}
}
