SHELL := /bin/bash

build-docker:
	docker build -t public.ecr.aws/vergeops/rvstore-product-sync .
	
run-docker:
	#-docker stop rvstore-product-sync
	-docker rm -f rvstore-product-sync
	docker run -d --name rvstore-product-sync public.ecr.aws/vergeops/rvstore-product-sync
	
push-docker:
	docker push public.ecr.aws/vergeops/rvstore-product-sync