package com.vergeops.rvstore.orderapi;

import java.util.List;

public class OrderResponse {
	private List<Order> orders;
	
	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
}
