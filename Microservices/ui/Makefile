SHELL := /bin/bash

build-package:
	ng build
	
build-docker: build-package
	docker build -t public.ecr.aws/vergeops/rvstore-ui .
	
run-docker:
	-docker stop rvstore-ui
	-docker rm rvstore-ui
	docker run -d -p 80:80 --name rvstore-ui public.ecr.aws/vergeops/rvstore-ui
	
push-docker:
	docker push public.ecr.aws/vergeops/rvstore-ui