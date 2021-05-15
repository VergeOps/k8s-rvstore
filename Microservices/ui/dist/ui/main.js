(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.endpoint = "http://rvstoreapi.vergeops.com/";
        if (window.location.hostname == 'localhost') {
            this.endpoint = "http://localhost:30090";
        }
    }
    //endpoint = environment.apiEndpoint;
    ApiService.prototype.getProducts = function () {
        return this.http.get(this.endpoint + "/products");
    };
    ApiService.prototype.getOrders = function () {
        return this.http.get(this.endpoint + "/orders");
    };
    ApiService.prototype.login = function () {
        return this.http.get(this.endpoint + "/auth/login");
    };
    ApiService.prototype.searchProducts = function (query) {
        return this.http.post(this.endpoint + "/products/_search", {
            "query": {
                "multi_match": {
                    "query": query,
                    "fields": ["*"]
                }
            }
        });
    };
    ApiService.prototype.accessSecure = function (token) {
        console.log("Using token: " + token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.get(this.endpoint + "/products/secure", httpOptions);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary\">\n  <h1 style=\"color: white;\">RV Store</h1>\n</nav>\n<div class=\"container-fluid\">\n  <h4>Welcome to the RV Store, a demonstration application meant for learning Docker and Kubernetes.</h4>\n  <p>\n    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\n      aria-expanded=\"false\" aria-controls=\"collapseExample\">\n      Expand Instructions\n    </button>\n  </p>\n  <div class=\"collapse\" id=\"collapseExample\">\n    <div class=\"card card-body\">\n      <h4>This application is broken down into several microservices to help you learn:</h4>\n      <ul>\n        <li>A UI service: You're looking at it</li>\n        <li>A product API service: Sends back a list of products</li>\n        <li>An authentication API service: Send back an OAuth token (a JSON Web Token, or JWT)</li>\n        <li>An order API service: Receives orders and sends back a list of orders</li>\n        <li>An order simulator: Runs as a background service and submits orders periodically</li>\n        <li>An Elasticsearch database: Stores products in a searchable form that enables search</li>\n        <li>A product sync service: Reads products from the product API service and pushes them to Elasticsearch</li>\n        <li>A gateway service: Acts as a central entrypoint to the API, and routes requests to the auth, product, and\n          order services based on the HTTP path</li>\n        <li>A MongoDB database to store orders</li>\n      </ul>\n\n      <h4>Your goals are (in order of importance)</h4>\n      <ol>\n        <li>Set up the application to run in Kubernetes. For this hackathon, Minikube or Docker Kubernetes for Desktop\n          is fine.</li>\n        <li>Centralize configurations (environment variables)</li>\n        <li>Put any sensitive information into secrets</li>\n        <li>Ensure that only public services are accessible outside the cluster. These are the gateway service and the\n          UI.</li>\n        <li>Make the app fault-tolerant\n          <ul>\n            <li>Make services redundant\n            <li>Set up probes\n            <li>Try to break it!\n          </ul>\n        </li>\n        <li>For MongoDB, set up a volume mapping to your hard drive so that the MongoDB pod can be thrown out and not\n          lose orders.</li>\n        <li>Once everything is running, release version 2.0 of the UI. Once verified, you’ve realized that there’s a\n          problem (the styling is hideous). Try rolling back.</li>\n        <li>If we covered HorizontalPodAutoscaler in this class, try adding scaling to one of your deployments, like the\n          product API.</li>\n      </ol>\n      <h4>Architecture Diagram</h4>\n      <img src=\"/assets/diagram.png\" width=\"1005px\" />\n    </div>\n  </div>\n\n\n\n  <div class=\"card\" style=\"margin-top: 2em;\">\n    <h5 class=\"card-header\">Step 1: Set the API base URL</h5>\n    <div class=\"card-body\">\n      <p>Before any data will show up, you must tell this UI application where to access the API. The port number is up to you, so update the text box below and click update.</p>\n      <form>\n        Backend host name: <input name=\"backendUrl\" type=\"text\" size=\"100\" [(ngModel)]=\"backendUrl\"> <button\n          type=\"submit\" class=\"btn btn-primary\" (click)=\"updateBackend()\">Update</button>\n      </form>\n      <div>Making calls to:</div>\n      <div>Product API <span class=\"badge badge-pill badge-primary\">{{apiService.endpoint}}/products</span></div>\n      <div>Product Search API <span class=\"badge badge-pill badge-primary\">{{apiService.endpoint}}/products/_search</span></div>\n      <div>Auth API <span class=\"badge badge-pill badge-primary\">{{apiService.endpoint}}/auth</span></div>\n      <div>Order API <span class=\"badge badge-pill badge-primary\">{{apiService.endpoint}}/orders</span></div>\n    </div>\n  </div>\n\n  <div class=\"card\" style=\"margin-top: 2em;\">\n    <h5 class=\"card-header\">Step 2: Test product service</h5>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div *ngFor=\"let product of products\">\n          <div class=\"col-sm-2\">\n            <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{product.name}}</h5>\n                <p class=\"card-text\">{{product.description}}</p>\n                <h4>{{product.price | currency}}</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" style=\"margin-top: 2em;\">\n    <h5 class=\"card-header\">Step 3: Test auth service</h5>\n    <div class=\"card-body\">\n      <p>The login button sends a request to the auth API and retrieves a JWT. The JWT is displayed on screen below the\n        button.</p>\n      <div><button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n        <div *ngIf=\"jwt\">\n          <strong>JWT:</strong> <span class=\"badge badge-pill badge-primary\">{{jwt.access_token}}</span>\n          </div>\n      </div>\n      <p>Once a JWT has been retrieved, then this next button should work and you should see a success message on\n        screen.\n        NOTE: This button won't work until the product service is running.</p>\n      <div>\n        <button class=\"btn btn-warn\" (click)=\"accessSecure(jwt.access_token)\">Access Secure Endpoint</button>\n        <div>\n          <strong>Response from protected service:</strong> {{secureResponse}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" style=\"margin-top: 2em;\">\n    <h5 class=\"card-header\">Step 4: Test product search service</h5>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <form>\n          Search term: <input name=\"searchTerm\" type=\"text\" size=\"100\" [(ngModel)]=\"searchTerm\"> <button\n            type=\"submit\" class=\"btn btn-primary\" (click)=\"searchProducts()\">Search</button>\n        </form>\n      </div>\n      <div class=\"row\">\n        <div *ngFor=\"let product of searchedProducts\">\n          <div class=\"col-sm-2\">\n            <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"{{product.image}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{product.name}}</h5>\n                <p class=\"card-text\">{{product.description}}</p>\n                <h4>{{product.price | currency}}</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" style=\"margin-top: 2em;\">\n    <h5 class=\"card-header\">Step 5: Test order service</h5>\n    <div class=\"card-body\">\n      <p><a href=\"#\" (click)=\"updateInterval(10)\">10</a> | <a href=\"#\" (click)=\"updateInterval(30)\">30</a> | <a href=\"#\"\n          (click)=\"updateInterval(60)\">60</a> | <a href=\"#\" (click)=\"updateInterval(120)\">120</a> seconds <i\n          *ngIf=\"orders.length == 0\" class=\"fas fa-sync fa-spin\"></i> {{loading}}</p>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Customer</th>\n            <th scope=\"col\">Items</th>\n            <th scope=\"col\">Subtotal</th>\n            <th scope=\"col\">Tax</th>\n            <th scope=\"col\">Total</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of orders\">\n            <th scope=\"row\">{{order.id}}</th>\n            <td>{{order.orderDate | date: 'medium'}}</td>\n            <td>{{order.customerName}}</td>\n            <td>\n              <p *ngFor=\"let item of order.items\">\n                {{item.name}} - {{item.price | currency}}\n              </p>\n            </td>\n            <td>{{order.subTotal | currency}}</td>\n            <td>{{order.tax | currency}}</td>\n            <td><strong>{{order.total | currency}}</strong></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt */ "./src/app/jwt.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.products = [];
        this.searchedProducts = [];
        this.orders = [];
        this.interval = 60;
        this.backendUrl = this.apiService.endpoint;
        this.jwt = new _jwt__WEBPACK_IMPORTED_MODULE_3__["Jwt"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        timer.subscribe(function (n) {
            _this.timeLeft = _this.interval - (n % _this.interval);
            if (n % _this.interval === 0)
                _this.getOrders();
        });
        this.getProducts();
    };
    AppComponent.prototype.searchProducts = function () {
        var _this = this;
        console.log("Search results:");
        this.searchedProducts = [];
        this.apiService.searchProducts(this.searchTerm).subscribe(function (results) {
            console.log(results);
            results.hits.hits.forEach(function (product) {
                _this.searchedProducts.push(product._source);
                //console.log(product._source);
            });
        });
    };
    AppComponent.prototype.getProducts = function () {
        var _this = this;
        this.apiService.getProducts().subscribe(function (products) {
            _this.products = products.products;
        });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this.apiService.login().subscribe(function (jwt) {
            _this.jwt = jwt;
        });
    };
    AppComponent.prototype.accessSecure = function (token) {
        var _this = this;
        this.apiService.accessSecure(token).subscribe(function (response) {
            _this.secureResponse = JSON.stringify(response);
        }, function (err) {
            console.log(err);
            _this.secureResponse = "Not allowed! An invalid or missing JWT caused the service to reject the request";
        });
    };
    AppComponent.prototype.getOrders = function () {
        var _this = this;
        this.orders = [];
        this.apiService.getOrders().subscribe(function (response) {
            _this.orders = response.orders;
        });
    };
    AppComponent.prototype.updateBackend = function () {
        this.apiService.endpoint = this.backendUrl;
        this.message = "Making calls to:<br/>\n      Product API <span class=\"badge badge-pill badge-primary\">" + this.apiService.endpoint + "products</span><br/>\n      Product Search API <span class=\"badge badge-pill badge-primary\">" + this.apiService.endpoint + "products/_search</span><br/>\n      Auth API <span class=\"badge badge-pill badge-primary\">" + this.apiService.endpoint + "auth</span><br/>\n      Order API <span class=\"badge badge-pill badge-primary\">" + this.apiService.endpoint + "orders</span>\n      ";
        this.getProducts();
        this.getOrders();
        this.searchProducts();
    };
    AppComponent.prototype.updateInterval = function (interval) {
        event.preventDefault();
        this.interval = interval;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/jwt.ts":
/*!************************!*\
  !*** ./src/app/jwt.ts ***!
  \************************/
/*! exports provided: Jwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jwt", function() { return Jwt; });
var Jwt = /** @class */ (function () {
    function Jwt() {
        this.access_token = "";
    }
    return Jwt;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiEndpoint: 'http://localhost:9000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tsolley/Google Drive/Clients/DI/Docker k8s 5 day/Microservices/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map