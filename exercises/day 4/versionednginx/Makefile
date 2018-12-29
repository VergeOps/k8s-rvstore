SHELL := /bin/bash

build-docker-1.0: 
	docker build -f Dockerfile-1.0 -t vergeops/versioned-nginx:1.0 .
	
push-docker-1.0:
	docker push vergeops/versioned-nginx:1.0

build-docker-2.0: 
	docker build -f Dockerfile-2.0 -t vergeops/versioned-nginx:2.0 .
	
push-docker-2.0:
	docker push vergeops/versioned-nginx:2.0

build-docker-liveness: 
	docker build -f Dockerfile-liveness -t vergeops/versioned-nginx:liveness .
	
push-docker-liveness:
	docker push vergeops/versioned-nginx:liveness

run-docker-liveness:
	docker run -d --name nginx-liveness -p 8000:80 vergeops/versioned-nginx:liveness