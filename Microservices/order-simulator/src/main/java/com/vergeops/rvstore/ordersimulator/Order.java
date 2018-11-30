package com.vergeops.rvstore.ordersimulator;

import java.util.List;

public class Order {
	private String id;
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
