package com.vergeops.rvstore.orderapi;

public class Product {
	private String id;
	private String name;
	private double price;
	private String description;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	@Override
    public boolean equals(Object o) { 
	  Product product = (Product) o;
	  if(product.getId().equals(this.getId()))
		  return true;
	  else
		  return false;
    } 
}
