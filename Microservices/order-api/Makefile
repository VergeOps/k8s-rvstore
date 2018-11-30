SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t vergeops/k8s-rvstore-order-api:1.0 .
	
run-docker:
	-docker stop rvstore-order-api
	-docker rm rvstore-order-api
	docker run -d -p 9002:9002 --name rvstore-order-api vergeops/k8s-rvstore-order-api:1.0
	
push-docker:
	docker push vergeops/k8s-rvstore-order-api:1.0