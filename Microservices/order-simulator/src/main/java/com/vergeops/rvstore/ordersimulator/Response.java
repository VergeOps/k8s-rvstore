package com.vergeops.rvstore.ordersimulator;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Response {
	private String origin = "*";
	private Object payload;

	@JsonProperty("Access-Control-Allow-Origin")
	public String getOrigin() {
		return origin;
	}

	public Object getPayload() {
		return payload;
	}

	public void setPayload(Object payload) {
		this.payload = payload;
	}
	
	

}
