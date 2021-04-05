SHELL := /bin/bash

build:
	go build

build-docker:
	docker build -t vergeops/k8s-rvstore-auth-api:1.0 -t public.ecr.aws/vergeops/rvstore-auth-api:latest .
	
run-docker:
	-docker stop rvstore-auth-api
	-docker rm rvstore-auth-api
	docker run -d -p 9003:9003 --name rvstore-auth-api public.ecr.aws/vergeops/rvstore-auth-api:latest
	
push-docker:
	docker push public.ecr.aws/vergeops/rvstore-auth-api:latest