package com.bezahive.bezaecommerce.controllers;


import com.bezahive.bezaecommerce.services.CheckoutService;
import com.bezahive.bezaecommerce.dto.Purchase;
import com.bezahive.bezaecommerce.dto.PurchaseResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }

}
