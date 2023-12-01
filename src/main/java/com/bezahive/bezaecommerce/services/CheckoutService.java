package com.bezahive.bezaecommerce.services;

import com.bezahive.bezaecommerce.dto.PaymentInfo;
import com.bezahive.bezaecommerce.dto.Purchase;
import com.bezahive.bezaecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo)throws StripeException;

}
