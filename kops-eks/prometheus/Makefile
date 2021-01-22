deploy-prometheus:
	helm repo add bitnami https://charts.bitnami.com/bitnami
	helm install prometheus bitnami/kube-prometheus

forward-port:
	kubectl port-forward --namespace default svc/prometheus-kube-prometheus-prometheus 9090:9090
	echo Access the dashboard at http://localhost:9090

deploy-grafana:
	-kubectl create namespace grafana
	helm install grafana stable/grafana --namespace grafana --set persistence.storageClassName="gp2" --set persistence.enabled=true --set adminPassword='password' --values grafana.yaml --set service.type=LoadBalancer
	echo Username is admin and password is password, get the DNS name from the service
	#helm repo add grafana https://grafana.github.io/helm-charts
	#helm repo update
	#helm install grafana grafana/grafana --namespace grafana --set persistence.storageClassName="gp2" --set persistence.enabled=true --set adminPassword='password' --values grafana.yaml --set service.type=LoadBalancer
