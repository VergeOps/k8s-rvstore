SHELL := /bin/bash

build:
	go build

build-docker: build
	docker build -t vergeops/k8s-rvstore-auth-api:1.0 .
	
run-docker:
	-docker stop rvstore-auth-api
	-docker rm rvstore-auth-api
	docker run -d -p 9003:9003 --name rvstore-auth-api vergeops/k8s-rvstore-auth-api:1.0
	
push-docker:
	docker push vergeops/k8s-rvstore-auth-api:1.0