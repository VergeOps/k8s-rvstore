import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Order } from './order';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
  public endpoint: string = "http://rvstoreapi.vergeops.com/"; 
  
  constructor(private http: HttpClient) { 
    if(window.location.hostname == 'localhost') {
      this.endpoint = "http://localhost:9000/";
    } else if (window.location.hostname.startsWith('192.168.')) {
      this.endpoint = "http://" + window.location.hostname + ":30090/";
    } 

  }

  //endpoint = environment.apiEndpoint;

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.endpoint + "/products/");
  }

  getOrders(): Observable<Order> {
    return this.http.get<Order>(this.endpoint + "/orders/");
  }

}