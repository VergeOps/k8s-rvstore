import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from './product';

import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public products;
  public orders;
  timeLeft: number;
  interval: number = 60;
  public backendUrl = this.apiService.endpoint;
  public message;

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

  getProducts() {
    this.apiService.getProducts().subscribe(
      products => {
        this.products = products;
      }
    );
  }

  getOrders() {
    this.orders = [];
    this.apiService.getOrders().subscribe(
      orders => {
        this.orders = orders;
      }
    );
  }

  updateBackend() {
    this.apiService.endpoint = this.backendUrl;
    this.message = "OK!";
    this.getProducts();
    this.getOrders();
  }

  updateInterval(interval) {
    event.preventDefault()
    this.interval = interval;
  }
}
