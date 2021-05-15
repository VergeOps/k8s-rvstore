import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from './product';

import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Jwt } from './jwt';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public products: Product[] = [];
  public searchTerm;
  public searchedProducts: Product[] = [];
  public orders: Order[] = [];
  timeLeft: number;
  interval: number = 60;
  public backendUrl = this.apiService.endpoint;
  public message;
  public jwt: Jwt = new Jwt();
  public secureResponse: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const timer = interval(1000);
    timer.subscribe(n => {
      this.timeLeft = this.interval - (n % this.interval);
      if (n % this.interval === 0)
        this.getOrders()
    });

    this.getProducts();
  }

  searchProducts() {
    console.log("Search results:");
    this.searchedProducts = [];
    this.apiService.searchProducts(this.searchTerm).subscribe(
      results => {
        console.log(results);
        results.hits.hits.forEach(product => {
          this.searchedProducts.push(product._source);
          //console.log(product._source);
        });
      }
    );
  }

  getProducts() {
    this.apiService.getProducts().subscribe(
      products => {
        this.products = products.products;
      }
    );
  }

  login() {
    this.apiService.login().subscribe(
      jwt => {
        this.jwt = jwt;
      }
    );
  }

  accessSecure(token: string) {
    this.apiService.accessSecure(token).subscribe(
      response => {
        this.secureResponse = JSON.stringify(response);
      },
      err => {
        console.log(err);
        this.secureResponse = "Not allowed! An invalid or missing JWT caused the service to reject the request";
      }
    );
  }

  getOrders() {
    this.orders = [];
    this.apiService.getOrders().subscribe(
      response => {
        this.orders = response.orders;
      }
    );
  }

  updateBackend() {
    this.apiService.endpoint = this.backendUrl;
    this.message = `Making calls to:<br/>
      Product API <span class=\"badge badge-pill badge-primary\">${this.apiService.endpoint}products</span><br/>
      Product Search API <span class=\"badge badge-pill badge-primary\">${this.apiService.endpoint}products/_search</span><br/>
      Auth API <span class=\"badge badge-pill badge-primary\">${this.apiService.endpoint}auth</span><br/>
      Order API <span class=\"badge badge-pill badge-primary\">${this.apiService.endpoint}orders</span>
      `;
    
    this.getProducts();
    this.getOrders();
    this.searchProducts();
  }

  updateInterval(interval) {
    event.preventDefault()
    this.interval = interval;
  }
}
