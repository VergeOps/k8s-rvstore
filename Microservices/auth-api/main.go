package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
)

// AccessToken is a JWT sent back to the user
type AccessToken struct {
	Token string `json:"access_token"`
}

func main() {

	http.HandleFunc("/auth/login", handler)
	http.HandleFunc("/health", healthHandler)

	http.ListenAndServe(":9003", nil)
}

// "handler" is our handler function. It has to follow the function signature of a ResponseWriter and Request type
// as the arguments.
func handler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	token := GenerateJwt()
	response, err := json.Marshal(token)
	if err != nil {
		//nothing
	}
	fmt.Fprintf(w, string(response))
}

// "healthHandler" is our health handler function. It has to follow the function signature of a ResponseWriter and Request type
// as the arguments.
func healthHandler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	
	fmt.Fprintf(w, "UP AND RUNNING")
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Content-Type", "application/json; charset=utf-8")
}

// GenerateJwt creates a new signed JWT
func GenerateJwt() AccessToken {
	expires := time.Now().Unix()
	expires += 60 * 60 * int64(12) // Expire in 12 hours

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"iss":       "api.rvstore.com",
		"exp":       expires,
		"sub":       "12345", // This is the user ID
		"firstName": "Tim",
		"lastName":  "Solley",
		"username":  "tsolley",
	})

	// Sign and get the complete encoded token as a string using the secret
	// This is a shared secret that your services should know
	tokenString, err := token.SignedString([]byte("s8&5rtrjGSrgY$6U2UcvU8qbYtz8%Qd7Y*g8ar9Qk^h&EmJk7fj$R&BSyDD4bQmjP73zF5#F6Pf^6!F@qP5BdpBJEmBAnJD3aRs"))

	fmt.Println(tokenString, err)

	accessToken := AccessToken{
		Token: tokenString,
	}

	return accessToken
}
