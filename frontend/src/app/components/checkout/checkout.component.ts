import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Luv2ShopFormService} from "../../services/luv2-shop-form.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // @ts-ignore
  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  // define properties for credit card months and years

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];


  constructor(private formBuilder: FormBuilder,
              private luv2ShopFormService: Luv2ShopFormService) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    });

    // populate credit card months

    const startMonth: number = new Date().getMonth() + 1;
    console.log("startMonth: " + startMonth);
    this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(
        data => {
          console.log("Retrieved credit card months: " + JSON.stringify(data));
          this.creditCardMonths = data;
        }
    );

    // populate credit card years

    this.luv2ShopFormService.getCreditCardYears().subscribe(
        data => {
          console.log("Retrieved credit card years: " + JSON.stringify(data));
          this.creditCardYears = data;
        }
    );


  }

    // @ts-ignore
  copyShippingAddressToBillingAddress(event) {

    if (event.target.checked) {
        // @ts-ignore
      this.checkoutFormGroup.controls.billingAddress
          // @ts-ignore
        .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    }
    else {
        // @ts-ignore
      this.checkoutFormGroup.controls.billingAddress.reset();
    }

  }

  onSubmit() {
    console.log("Handling the submit button");
    // @ts-ignore
      console.log(this.checkoutFormGroup.get('customer').value);
    // @ts-ignore
      console.log("The email address is " + this.checkoutFormGroup.get('customer').value.email);
  }
}
