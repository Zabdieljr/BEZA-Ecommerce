import { Injectable } from '@angular/core';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Luv2ShopFormService {

  constructor() { }

  // add new method for months
  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number [] = [];
    // build an array for "Month" dropdown list
    // - start at current month and loop until
    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }
    return of(data);
  }
  // add new method for credit card years
    getCreditCardYears(): Observable<number[]> {
        let data: number [] = [];
        // build an array for "Year" dropdown list
        // - start at current year and loop for next 10 years
        const startYear: number = new Date().getFullYear();
        const endYear: number = startYear + 10;
        for (let theYear = startYear; theYear <= endYear; theYear++) {
        data.push(theYear);
        }
        return of(data);
    }
}
