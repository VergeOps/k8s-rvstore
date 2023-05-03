install:
	helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
	helm install my-otel-demo open-telemetry/opentelemetry-demo # --values values.yaml
	kubectl port-forward svc/my-otel-demo-otelcol 4318:4318 &

	# Webstore: http://localhost:30080/
	# Grafana: http://localhost:30080/grafana/
	# Feature Flags UI: http://localhost:30080/feature/
	# Load Generator UI: http://localhost:30080/loadgen/
	# Jaeger UI: http://localhost:30080/jaeger/ui/
	

uninstall:
	#kubectl delete -f otel.yaml
	helm uninstall my-otel-demo

open: open-store open-jaeger open-grafana

open-store:
	kubectl port-forward svc/my-otel-demo-frontendproxy 8080:8080 &
	open http://localhost:8080
	#open http://localhost:$(shell kubectl get service/my-otel-demo-frontendproxy -o jsonpath='{.spec.ports[0].nodePort}')/

open-jaeger:
	open http://localhost:$(shell kubectl get service/my-otel-demo-frontendproxy -o jsonpath='{.spec.ports[0].nodePort}')/jaeger/ui

open-grafana:
	open http://localhost:$(shell kubectl get service/my-otel-demo-frontendproxy -o jsonpath='{.spec.ports[0].nodePort}')/grafana