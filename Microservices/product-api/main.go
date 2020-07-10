package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/dgrijalva/jwt-go"
)

type Product struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Price       float64 `json:"price"`
	Description string  `json:"description"`
	Image       string  `json:"image"`
}

type RVClaims struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	UserName  string `json:"username"`
	Email     string `json:"email"`
	jwt.StandardClaims
}

var products []Product

func main() {
	products = addData()

	http.HandleFunc("/products", handler)
	http.HandleFunc("/products/", handler)
	http.HandleFunc("/products/secure", secureHandler)

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

func secureHandler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	if r.Method == http.MethodOptions {
		fmt.Fprintf(w, string("ok"))
	} else {
		authorization := r.Header.Get("Authorization")
		fmt.Println("Authorization header:")
		fmt.Println(authorization)
		result := VerifyJwt(authorization)
		if result {
			fmt.Fprintf(w, string("User is authorized to access this endpoint. Processing continues successfully."))
		} else {
			http.Error(w, "FORBIDDEN!", http.StatusForbidden)
		}
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Content-Type", "application/json; charset=utf-8")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
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

// VerifyJwt validates that a token is valid
func VerifyJwt(tokenString string) bool {
	token, err := jwt.ParseWithClaims(tokenString, &RVClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte("s8&5rtrjGSrgY$6U2UcvU8qbYtz8%Qd7Y*g8ar9Qk^h&EmJk7fj$R&BSyDD4bQmjP73zF5#F6Pf^6!F@qP5BdpBJEmBAnJD3aRs"), nil
	})
	if err != nil {
		fmt.Println(err)
		return false
	}

	fmt.Println("Token")
	fmt.Println(token)

	if claims, ok := token.Claims.(*RVClaims); ok && token.Valid {
		fmt.Println("The user generated from the JWT:")
		fmt.Println(claims.FirstName)
		fmt.Println(claims.LastName)
		fmt.Println(claims.StandardClaims.Subject)

		return true
	}

	return false

}
