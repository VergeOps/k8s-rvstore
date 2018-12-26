SHELL := /bin/bash

build-docker-1.0: 
	docker build -f Dockerfile-1.0 -t vergeops/versioned-nginx:1.0 .
	
push-docker-1.0:
	docker push vergeops/versioned-nginx:1.0

build-docker-2.0: 
	docker build -f Dockerfile-2.0 -t vergeops/versioned-nginx:2.0 .
	
push-docker-2.0:
	docker push vergeops/versioned-nginx:2.0