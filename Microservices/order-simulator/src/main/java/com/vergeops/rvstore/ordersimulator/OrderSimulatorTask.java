package com.vergeops.rvstore.ordersimulator;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class OrderSimulatorTask {

	@Value("${com.vergeops.rvstore.base-api-uri}")
	private String baseApiUri;

	private List<Product> products;
	
	private RestTemplate restTemplate = new RestTemplate();

	@Scheduled(fixedRate = 60000)
	public void submitOrder() {
		if(products == null) {
			getProducts();
		}
		Person person = getPerson();
		Order order = new Order();
		order.setItems(new ArrayList<Product>());
		order.setCustomerName(person.getName().getFirst() + " " + person.getName().getLast());
		Random random = new Random();
		
		// Submit several items randomly
		int itemCount = random.nextInt(products.size());
		if(itemCount == 0)
			itemCount = 1;
		for(int i = 0; i < itemCount; i++) {
			Product product = products.get(random.nextInt(products.size()));
			order.getItems().add(product);
			order.setSubTotal(order.getSubTotal() + product.getPrice());
		}
		
		order.setTax(order.getSubTotal() * .072f);
		order.setTotal(order.getSubTotal() + order.getTax());
				
		submitOrder(order);
	}

	@PostConstruct
	private void getProducts() {
		try {
		ResponseEntity<List<Product>> response = restTemplate.exchange(baseApiUri + "/products", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Product>>() {
				});
		products = response.getBody();
		System.out.println("Got " + products.size() + " products.");
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}

	private Person getPerson() {
		// Get a random person
		//RandomPerson rando = restTemplate.getForObject("https://randomuser.me/api/?nat=gb", RandomPerson.class);
		//return rando.getResults().get(0);
		Name name = new Name();
		name.setFirst("John");
		name.setLast("Smith");

		Person person = new Person();
		person.setName(name);
		return person;
	}
	
	private void submitOrder(Order order) {
		restTemplate.postForObject(baseApiUri + "/orders/", order, Order.class);
		System.out.println("Order submitted");
	}

}
