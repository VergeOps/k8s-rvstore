SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t public.ecr.aws/vergeops/rvstore-gateway-service .
	
run-docker: stop-docker
	docker run -d -p 9000:9000 --name rvstore-api-gateway public.ecr.aws/vergeops/rvstore-gateway-service
	
run-docker-compose: stop-docker
	docker run -d -p 9000:9000 -e SPRING_PROFILES_ACTIVE=compose --name rvstore-api-gateway public.ecr.aws/vergeops/rvstore-gateway-service
	
stop-docker:
	-docker stop rvstore-api-gateway
	-docker rm rvstore-api-gateway
	
push-docker:
	docker push public.ecr.aws/vergeops/rvstore-gateway-service

build-krakend:
	docker build -t public.ecr.aws/vergeops/rvstore-gateway-service -f Dockerfile_krakend .