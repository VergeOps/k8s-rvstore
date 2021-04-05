SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t public.ecr.aws/vergeops/rvstore-order-api .
	
run-docker:
	-docker stop rvstore-order-api
	-docker rm rvstore-order-api
	docker run -d -p 9002:9002 --name rvstore-order-api public.ecr.aws/vergeops/rvstore-order-api
	
push-docker:
	docker push public.ecr.aws/vergeops/rvstore-order-api