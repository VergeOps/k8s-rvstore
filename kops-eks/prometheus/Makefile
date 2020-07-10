deploy-prometheus:
	-kubectl create namespace prometheus
	helm repo add stable https://kubernetes-charts.storage.googleapis.com/
	helm repo update
	helm install prometheus stable/prometheus --namespace prometheus --set alertmanager.persistentVolume.storageClass="gp2",server.persistentVolume.storageClass="gp2"

forward-port:
	kubectl --namespace=prometheus port-forward deploy/prometheus-server 9090
	echo Access the dashboard at http://localhost:9090

deploy-grafana:
	-kubectl create namespace grafana
	helm install grafana stable/grafana --namespace grafana --set persistence.storageClassName="gp2" --set persistence.enabled=true --set adminPassword='password' --values grafana.yaml --set service.type=LoadBalancer
	echo Username is admin and password is password, get the DNS name from the service