create-cluster: upgrade
	kind create cluster --config cluster-config.yaml
	kubectl cluster-info --context kind-kind

delete-cluster:
	kind delete cluster

upgrade:
	go install sigs.k8s.io/kind@latest