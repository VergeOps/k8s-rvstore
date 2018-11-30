package com.vergeops.rvstore.orderapi;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;

public class Order {
	@Id
	private String id;
	private Date orderDate;
	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	private String customerName;
	private float subTotal;
	private float tax;
	private float total;
	private List<Product> items;
	
	public Order() {}
	
	public Order(String id) {
		this.id = id;
	}
	
	@Override
    public String toString() {
        return String.format(
                "Order[id=%s]",
                id);
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public float getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(float subTotal) {
		this.subTotal = subTotal;
	}

	public float getTax() {
		return tax;
	}

	public void setTax(float tax) {
		this.tax = tax;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public List<Product> getItems() {
		return items;
	}

	public void setItems(List<Product> items) {
		this.items = items;
	}
}
