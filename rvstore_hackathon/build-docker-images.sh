cd ../Microservices/auth-api
docker build -t public.ecr.aws/e7e6w2e3/rvstore-auth-api .

cd ../gateway-service
docker build -t public.ecr.aws/e7e6w2e3/rvstore-gateway-service .

cd ../order-api
docker build -t public.ecr.aws/e7e6w2e3/rvstore-order-api .

cd ../order-simulator
docker build -t public.ecr.aws/e7e6w2e3/rvstore-order-simulator .

cd ../product-api
docker build -t public.ecr.aws/e7e6w2e3/rvstore-product-api .

cd ../ui
docker build -t public.ecr.aws/e7e6w2e3/rvstore-ui .