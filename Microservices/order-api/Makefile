SHELL := /bin/bash

build-package:
	mvn package
	
build-docker: build-package
	docker build -t public.ecr.aws/e7e6w2e3/rvstore-order-api:latest .
	
run-docker:
	-docker stop rvstore-order-api
	-docker rm rvstore-order-api
	docker run -d -p 9002:9002 --name rvstore-order-api public.ecr.aws/e7e6w2e3/rvstore-order-api:latest
	
push-docker:
	aws ecr-public get-login-password --region us-east-1 --profile vergeops | docker login --username AWS --password-stdin public.ecr.aws/e7e6w2e3
	docker push public.ecr.aws/e7e6w2e3/rvstore-order-api:latest