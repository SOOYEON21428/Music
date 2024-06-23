package com.idle.shoppingmall.Controller.ControllerView.ProductViews.DTO;

import com.idle.shoppingmall.Entity.Product.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentListDTOtoSession {
    private Product product;
    private String size;
    private int count;
}
