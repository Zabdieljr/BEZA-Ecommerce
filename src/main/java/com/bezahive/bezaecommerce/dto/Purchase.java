package com.bezahive.bezaecommerce.dto;

import com.bezahive.bezaecommerce.domain.Address;
import com.bezahive.bezaecommerce.domain.Customer;
import com.bezahive.bezaecommerce.domain.Order;
import com.bezahive.bezaecommerce.domain.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
