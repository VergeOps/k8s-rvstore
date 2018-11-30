package com.vergeops.rvstore.ordersimulator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class OrderSimulatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderSimulatorApplication.class, args);
	}
}
