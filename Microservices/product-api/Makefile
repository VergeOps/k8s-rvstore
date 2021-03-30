SHELL := /bin/bash

build:
	go build

build-docker:
	docker build -t vergeops/k8s-rvstore-product-api:1.0 -t public.ecr.aws/e7e6w2e3/rvstore-product-api .
	
run-docker:
	-docker stop rvstore-product-api
	-docker rm rvstore-product-api
	docker run -d -p 9001:9001 --name rvstore-product-api -e PRODUCT_FILE_LOCATION="/data/products" vergeops/k8s-rvstore-product-api:1.0
	docker cp /Users/tsolley/Google\ Drive/Clients/DI/Docker\ k8s\ 5\ day/rvstore_hackathon/products.json rvstore-product-api:/data/products
	
push-docker:
	docker push public.ecr.aws/e7e6w2e3/rvstore-product-api