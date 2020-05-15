package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Product struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Price       float64 `json:"price"`
	Description string  `json:"description"`
	Image       string  `json:"image"`
}

var products []Product

func main() {
	products = addData()

	http.HandleFunc("/products", handler)
	http.HandleFunc("/products/", handler)

	http.ListenAndServe(":9001", nil)
}

// "handler" is our handler function. It has to follow the function signature of a ResponseWriter and Request type
// as the arguments.
func handler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	response, err := json.Marshal(products)
	if err != nil {
		//nothing
	}
	fmt.Println("Received a request for product data")
	fmt.Fprintf(w, string(response))
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Content-Type", "application/json; charset=utf-8")
}

func addData() []Product {
	product := Product{
		ID:          "sewer-hose",
		Name:        "Stinky Slinky Sewer Hose",
		Price:       19.99,
		Description: "Oh what fun times you'll have with this! Be sure to stock up on gloves and disinfectant soap before checkout!",
		Image:       "https://campaddict.com/wp-content/uploads/RV-sewer-hose-in-use.jpg",
	}
	products = append(products, product)

	product = Product{
		ID:          "electric-jacks",
		Name:        "Six-Point Auto-Leveling Jacks",
		Price:       3499.99,
		Description: "Six-point electric auto-leveling jacks for your travel trailer or fifth wheel. No more yelling at your spouse for getting the number of wood blocks wrong! Just push a button and walk away!",
		Image:       "https://cdn3.volusion.com/dxylq.nruds/v/vspfiles/photos/8735-2.jpg?1536058347",
	}
	products = append(products, product)

	product = Product{
		ID:          "heated-hose",
		Name:        "Heated Fresh Water Hose",
		Price:       89.99,
		Description: "Heated hose for those freezing nights",
		Image:       "https://i5.walmartimages.com/asr/9b926f3b-cdd5-4bcc-b09b-ef44d461c023_2.e4c509076a08564a97b13b61ea0c45da.jpeg",
	}
	products = append(products, product)

	product = Product{
		ID:          "50-amp-extension-cord",
		Name:        "25' 50 amp Extension Cord",
		Price:       89.99,
		Description: "Quit parking your RV based on where the post is!",
		Image:       "https://images-na.ssl-images-amazon.com/images/I/71t4SHO3EML._SX425_.jpg",
	}
	products = append(products, product)

	product = Product{
		ID:          "5th-wheel-tripod",
		Name:        "5th Wheel Tripod Stabilizer",
		Price:       127.49,
		Description: "This rig won't be a rockin' when you have this tripod stabilizer on your 5th wheel hitch.",
		Image:       "https://www.etrailer.com/static/images/faq/review-ultrafab-5th-wheel-king-pin-tripod-stabilizer-uf19-950001_644.jpg",
	}
	products = append(products, product)

	return products
}
