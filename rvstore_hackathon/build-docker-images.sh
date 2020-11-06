cd ../Microservices/auth-api
docker build -t vergeops/k8s-rvstore-auth-api:1.0 .

cd ../gateway-service
docker build -t vergeops/k8s-rvstore-api-gateway:1.0 .

cd ../order-api
docker build -t vergeops/k8s-rvstore-order-api:1.0 .

cd ../order-simulator
docker build -t vergeops/k8s-rvstore-order-simulator:1.0 .

cd ../product-api
docker build -t vergeops/k8s-rvstore-product-api:1.0 .

cd ../ui
docker build -t vergeops/k8s-rvstore-ui:1.0 .