package com.vergeops.rvstore.orderapi;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

	@Autowired
	private OrderRepository repository;
	
	@RequestMapping(path = "", method = RequestMethod.GET)
	public OrderResponse getOrders(HttpServletResponse response) {
		System.out.println("In getOrders");
		response.setHeader("Access-Control-Allow-Origin", "*");
		OrderResponse orderResponse = new OrderResponse();
		List<Order> orders = repository.findAll();
		orderResponse.setOrders(orders);
		
		return orderResponse;
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public Order getOrder(@PathVariable String id, HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		Optional<Order> result = repository.findById(id);
		if(result.isPresent()) {
			return (Order) result.get();
		} else {
			return null;
		}
	}
	
	@RequestMapping(path = "", method = RequestMethod.POST)
	public Order createOrder(@RequestBody Order order, HttpServletResponse response) {
		System.out.println("In createOrder");
		response.setHeader("Access-Control-Allow-Origin", "*");
		order.setId(UUID.randomUUID().toString());
		order.setOrderDate(new Date());
		repository.save(order);
		return order;
	}

	@RequestMapping(path = "/health", method = RequestMethod.GET)
	public String healthCheck(HttpServletResponse response) {
		System.out.println("In health check");
		response.setHeader("Access-Control-Allow-Origin", "*");
		return "UP AND RUNNING";
	}


}
