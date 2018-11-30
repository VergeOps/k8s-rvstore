SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t vergeops/k8s-rvstore-product-api:1.0 .
	
run-docker:
	-docker stop rvstore-product-api
	-docker rm rvstore-product-api
	docker run -d -p 9001:9001 --name rvstore-product-api vergeops/k8s-rvstore-product-api:1.0
	
push-docker:
	docker push vergeops/k8s-rvstore-product-api:1.0