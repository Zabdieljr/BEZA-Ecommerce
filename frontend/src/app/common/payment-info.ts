export class PaymentInfo {

  // add amount and currency fields
  constructor(
    public amount?: number,
    public currency?: string,
    public receiptEmail?: string,
    public orderItems?: any[]
  ) {
  }

}
