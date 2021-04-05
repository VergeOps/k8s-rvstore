import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Order } from './order';
import { environment } from '../environments/environment';
import { Jwt } from './jwt';
import { HttpHeaders } from '@angular/common/http';
import { SearchResult } from './searchresult';
import { SearchQuery } from './searchquery';

@Injectable()
export class ApiService {
  public endpoint: string = "http://rvstoreapi.vergeops.com/"; 
  
  constructor(private http: HttpClient) { 
    if(window.location.hostname == 'localhost') {
      this.endpoint = "http://localhost:30090";
    }
  }

  //endpoint = environment.apiEndpoint;

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.endpoint + "/products");
  }

  getOrders(): Observable<Order> {
    return this.http.get<Order>(this.endpoint + "/orders/");
  }

  login(): Observable<Jwt> {
    return this.http.get<Jwt>(this.endpoint + "/auth/login");
  }

  searchProducts(query: SearchQuery): Observable<SearchResult> {
    return this.http.post<SearchResult>(this.endpoint + "/products/_search", {
      "query": {
        "multi_match" : {
          "query":    query, 
          "fields": [ "*" ] 
        }
      }
    });
  }

  accessSecure(token: string): Observable<string> {
    console.log("Using token: " + token);
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.http.get<string>(this.endpoint + "/products/secure", httpOptions);
  }

}