SHELL := /bin/bash

build-package:
	ng build
	
build-docker: build-package
	docker build -t vergeops/k8s-rvstore-ui:1.0 .
	
run-docker:
	-docker stop rvstore-ui
	-docker rm rvstore-ui
	docker run -d -p 80:80 --name rvstore-ui vergeops/k8s-rvstore-ui:1.0
	
push-docker:
	docker push vergeops/k8s-rvstore-ui:1.0