package com.bezahive.bezaecommerce.services;

import com.bezahive.bezaecommerce.dto.Purchase;
import com.bezahive.bezaecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

}
