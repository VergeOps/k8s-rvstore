SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t vergeops/k8s-rvstore-order-simulator:1.0 .
	
run-docker:
	-docker stop rvstore-order-simulator
	-docker rm rvstore-order-simulator
	docker run -d --name rvstore-order-simulator vergeops/k8s-rvstore-order-simulator:1.0
	
push-docker:
	docker push vergeops/k8s-rvstore-order-simulator:1.0