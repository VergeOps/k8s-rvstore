install:
	istioctl install --set profile=demo -y
	kubectl label namespace default istio-injection=enabled

analyze:
	istioctl analyze

install-rvstore:
	kubectl apply -f ../minikube
	kubectl patch service rvstore-api-gateway -p '{"spec":{"type":"ClusterIP"}}' -n rvstore
	kubectl patch service rvstore-ui -p '{"spec":{"type":"ClusterIP"}}' -n rvstore
	kubectl patch cronjob product-sync -p '{"spec":{"jobTemplate":{"spec":{"template":{"metadata":{"labels":{"sidecar.istio.io/inject":"false"}}}}}}}' -n rvstore
	kubectl patch cronjob order-simulator -p '{"spec":{"jobTemplate":{"spec":{"template":{"metadata":{"labels":{"sidecar.istio.io/inject":"false"}}}}}}}' -n rvstore
	kubectl apply -f gateway.yaml

delete-krakend:
	kubectl delete service rvstore-api-gateway -n rvstore
	kubectl delete deployment api-gateway-deployment -n rvstore