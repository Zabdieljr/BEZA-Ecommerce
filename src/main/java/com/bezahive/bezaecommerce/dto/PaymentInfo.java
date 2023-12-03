package com.bezahive.bezaecommerce.dto;

import lombok.Data;

@Data
public class PaymentInfo {
    // add amount and currency fields
    private int amount;
    private String currency;
    private String receiptEmail;


}
