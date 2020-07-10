import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from './product';

import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Jwt } from './jwt';

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

  getProducts() {
    this.apiService.getProducts().subscribe(
      products => {
        this.products = products;
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
        this.secureResponse = JSON.stringify(err);
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
