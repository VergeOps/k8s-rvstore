SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t public.ecr.aws/vergeops/rvstore-order-simulator .
	
run-docker:
	-docker stop rvstore-order-simulator
	-docker rm rvstore-order-simulator
	docker run -d --name rvstore-order-simulator public.ecr.aws/vergeops/rvstore-order-simulator
	
push-docker:
	docker push public.ecr.aws/vergeops/rvstore-order-simulator