SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t vergeops/k8s-rvstore-api-gateway:1.0 .
	
run-docker: stop-docker
	docker run -d -p 9000:9000 --name rvstore-api-gateway vergeops/k8s-rvstore-api-gateway:1.0
	
run-docker-compose: stop-docker
	docker run -d -p 9000:9000 -e SPRING_PROFILES_ACTIVE=compose --name rvstore-api-gateway vergeops/k8s-rvstore-api-gateway:1.0
	
stop-docker:
	-docker stop rvstore-api-gateway
	-docker rm rvstore-api-gateway
	
push-docker:
	docker push vergeops/k8s-rvstore-api-gateway:1.0