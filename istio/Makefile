install:
	istioctl install --set profile=demo -y
	kubectl label namespace default istio-injection=enabled
	kubectl apply -f prometheus.yaml
	kubectl apply -f kiali.yaml

analyze:
	istioctl analyze

install-rvstore:
	kubectl apply -f ../minikube
	kubectl patch service rvstore-ui -p '{"spec":{"type":"ClusterIP"}}' -n rvstore
	kubectl delete service rvstore-api-gateway -n rvstore
	kubectl delete deployment api-gateway-deployment -n rvstore
	kubectl apply -f virtualservice.yaml
	kubectl apply -f gateway.yaml
	kubectl apply -f destinationrules.yaml
	kubectl apply -f authpolicy.yaml
	kubectl apply -f peerauthentication.yaml

open-browser:
	open http://localhost:80?host=localhost&port=80

deploy-ui-v2:
	kubectl apply -f ui-v2.yaml

uninstall:
	istioctl uninstall --purge
	kubectl delete -f prometheus.yaml
	kubectl delete -f kiali.yaml