package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/dgrijalva/jwt-go"
)

type ProductResponse struct {
	Products []Product `json:"products"`
}

type SecureContentResponse struct {
	SecretInformation string `json:"secretInformation"`
	Access string `json:"access"`
}

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

type Search struct {
    Term string `json:"term"`
}

var products ProductResponse

func main() {
	fmt.Println("Starting up")

	http.HandleFunc("/products", handler)
	http.HandleFunc("/products/", handler)
	http.HandleFunc("/products/secure", secureHandler)

	http.HandleFunc("/health", healthHandler)

	http.ListenAndServe(":9001", nil)
	fmt.Println("The product API server is listening on port 9001")
}

// "handler" is our handler function. It has to follow the function signature of a ResponseWriter and Request type
// as the arguments.
func handler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	fmt.Println("Loading up products from products.json file")
	readProductsFile()

	response, err := json.Marshal(products)
	if err != nil {
		fmt.Println("Unable to marshal products to send back")
	}
	fmt.Println("Received a request for product data")
	if len(products.Products) == 0 {
		fmt.Fprintf(w, "There are no products in the service. Did you correctly provide the products.json file to the pod?")
	} else {
		fmt.Fprintf(w, string(response))
	}
}

// "healthHandler" is our health handler function. It has to follow the function signature of a ResponseWriter and Request type
// as the arguments.
func healthHandler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	
	fmt.Fprintf(w, "UP AND RUNNING")
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
			secureResponse := SecureContentResponse{ 
				SecretInformation: "This is protected content from a JWT protected resource!",
				Access: "Allowed",
			}
			response, err := json.Marshal(secureResponse)
			if err != nil {
				fmt.Println("Unable to marshal secure response")
			}
			fmt.Fprintf(w, string(response))
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

func readProductsFile() {
	environment := os.Getenv("ENVIRONMENT")
	if environment == "containerized" {
		readProductsFileFromContainer()
	} else {
		readProductsFileFromConfigMap()
	}
}

func readProductsFileFromConfigMap() {
	location := os.Getenv("PRODUCT_FILE_LOCATION")
	fmt.Println("Reading file from: " + location + "/products.json")
	data, err := ioutil.ReadFile(location + "/products.json")
	if err != nil {
		fmt.Println("File reading error", err)
		fmt.Println("Did you correctly provide the products.json file in a ConfigMap? Try getting into the pod and looking around the file system for this file.")
		fmt.Println("kubectl exec -it <pod name> -- bash")
		return
	}
	fmt.Println("Contents of file:", string(data))

	//products = make(ProductResponse, 0)
	err = json.Unmarshal([]byte(data), &products)
	if err != nil {
		fmt.Println("Error marshalling products", err)
		return
	}
}

func readProductsFileFromContainer() {
	fmt.Println("Reading file from: container file system")
	data, err := ioutil.ReadFile("/data/products/container/products.json")
	if err != nil {
		fmt.Println("File reading error", err)
		return
	}
	fmt.Println("Contents of file:", string(data))

	//products = make(ProductResponse, 0)
	err = json.Unmarshal([]byte(data), &products)
	if err != nil {
		fmt.Println("Error marshalling products", err)
		return
	}
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
