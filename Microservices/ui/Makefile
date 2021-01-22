SHELL := /bin/bash

build-package:
	ng build
	
build-docker: build-package
	docker build -t public.ecr.aws/e7e6w2e3/rvstore-ui:latest .
	
run-docker:
	-docker stop rvstore-ui
	-docker rm rvstore-ui
	docker run -d -p 80:80 --name rvstore-ui public.ecr.aws/e7e6w2e3/rvstore-ui:latest
	
push-docker:
	aws ecr-public get-login-password --region us-east-1 --profile vergeops | docker login --username AWS --password-stdin public.ecr.aws/e7e6w2e3
	docker push public.ecr.aws/e7e6w2e3/rvstore-ui:latest