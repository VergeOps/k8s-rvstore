package com.vergeops.rvstore.productapi;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

@RestController
public class ProductController {

	private List<Product> products = new ArrayList<Product>();

	@RequestMapping(path = "/", method = RequestMethod.GET)
	public List<Product> getProducts(HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		return products;
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public Product getProduct(@PathVariable String id, HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		Product product = new Product();
		product.setId(id);
		return products.get(products.indexOf(product));
	}

	@PostConstruct
	private void initializeProducts() throws JsonParseException, JsonMappingException, IOException {

		Product sewerHose = new Product();
		sewerHose.setId("sewer-hose");
		sewerHose.setName("Stinky Slinky Sewer Hose");
		sewerHose.setDescription(
				"Oh what fun times you'll have with this! Be sure to stock up on gloves and disinfectant soap before checkout!");
		sewerHose.setPrice(19.99);
		sewerHose.setImage("https://campaddict.com/wp-content/uploads/RV-sewer-hose-in-use.jpg");
		products.add(sewerHose);

		Product jacks = new Product();
		jacks.setId("electric-jacks");
		jacks.setName("Six-Point Auto-Leveling Jacks");
		jacks.setDescription(
				"Six-point electric auto-leveling jacks for your travel trailer or fifth wheel. No more yelling at your spouse for getting the number of wood blocks wrong! Just push a button and walk away!");
		jacks.setPrice(3499.99);
		jacks.setImage("https://cdn3.volusion.com/dxylq.nruds/v/vspfiles/photos/8735-2.jpg?1536058347");
		products.add(jacks);
		
		Product hose = new Product();
		hose.setId("heated-hose");
		hose.setName("Heated Fresh Water Hose");
		hose.setDescription(
				"Heated hose for those freezing nights");
		hose.setPrice(89.99);
		hose.setImage("https://i5.walmartimages.com/asr/9b926f3b-cdd5-4bcc-b09b-ef44d461c023_2.e4c509076a08564a97b13b61ea0c45da.jpeg");
		products.add(hose);
		
		Product extension = new Product();
		extension.setId("50-amp-extension-cord");
		extension.setName("25' 50 amp Extension Cord");
		extension.setDescription(
				"Quit parking your RV based on where the post is!");
		extension.setPrice(89.99);
		extension.setImage("https://images-na.ssl-images-amazon.com/images/I/71t4SHO3EML._SX425_.jpg");
		products.add(extension);
		
		Product tripod = new Product();
		tripod.setId("5th-wheel-tripod");
		tripod.setName("5th Wheel Tripod Stabilizer");
		tripod.setDescription(
				"This rig won't be a rockin' when you have this tripod stabilizer on your 5th wheel hitch.");
		tripod.setPrice(127.49);
		tripod.setImage("https://www.etrailer.com/static/images/faq/review-ultrafab-5th-wheel-king-pin-tripod-stabilizer-uf19-950001_644.jpg");
		products.add(tripod);

	}

}
