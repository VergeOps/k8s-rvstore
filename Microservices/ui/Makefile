SHELL := /bin/bash

build-package:
	ng build
	
build-docker: build-package
	docker build -t public.ecr.aws/vergeops/rvstore-ui .

build-docker-v2: build-package
	docker build -t public.ecr.aws/vergeops/rvstore-ui:v2 .
	
run-docker:
	-docker stop rvstore-ui
	-docker rm rvstore-ui
	docker run -d -p 80:80 --name rvstore-ui public.ecr.aws/vergeops/rvstore-ui
	
push-docker:
	docker push public.ecr.aws/vergeops/rvstore-ui

push-docker-v2:
	docker push public.ecr.aws/vergeops/rvstore-ui:v2