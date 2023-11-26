import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Luv2ShopFormService} from "../../services/luv2-shop-form.service";
import {State} from "../../common/state";
import {Country} from "../../common/country";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  checkoutFormGroup!: FormGroup;


  totalPrice: number = 0;
  totalQuantity: number = 0;

  // define properties for credit card months and years

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  // create a country array
    countries: Country[] = [];

    shippingAddressStates: State[] = [];
    billingAddressStates: State[] = [];



  constructor(private formBuilder: FormBuilder,
              private luv2ShopFormService: Luv2ShopFormService,
            private router: Router
              ) { }

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
// populate countries
      this.luv2ShopFormService.getCountries().subscribe(
          data => {
              console.log("Retrieved countries: " + JSON.stringify(data));
              this.countries = data;
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

            // bug fix for states
            this.billingAddressStates = this.shippingAddressStates;

        }
        else {
          // @ts-ignore
            this.checkoutFormGroup.controls.billingAddress.reset();

            // bug fix for states
            this.billingAddressStates = [];
        }

    }



    onSubmit() {
    console.log("Handling the submit button");
    // @ts-ignore
      console.log(this.checkoutFormGroup.get('customer').value);
    // @ts-ignore
      console.log("The email address is " + this.checkoutFormGroup.get('customer').value.email);
    // @ts-ignore
      console.log("The shipping address country is " + this.checkoutFormGroup.get('shippingAddress').value.country.name);
  }

  handleMonthsAndYears() {
    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup?.value.expirationYear);

    // if the current year equals the selected year, then start with the current month
    let startMonth: number;


    if (currentYear === selectedYear) {
      startMonth = new Date().getMonth() + 1;
    }
    else {
      startMonth = 1;
    }

    this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(
        data => {
          console.log("Retrieved credit card months: " + JSON.stringify(data));
          this.creditCardMonths = data;
        }
    );
  }

    getStates(formGroupName: string) {

        const formGroup = this.checkoutFormGroup.get(formGroupName);

        const countryCode = formGroup?.value.country.code;
        const countryName = formGroup?.value.country.name;

        console.log(`${formGroupName} country code: ${countryCode}`);
        console.log(`${formGroupName} country name: ${countryName}`);

        this.luv2ShopFormService.getStates(countryCode).subscribe(
            data => {

                if (formGroupName === 'shippingAddress') {
                    this.shippingAddressStates = data;
                }
                else {
                    this.billingAddressStates = data;
                }

                // select first item by default
                formGroup?.get('state')?.setValue(data[0]);
            }
        );
    }
}
