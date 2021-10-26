install:
	kubectl create namespace argocd
	kubectl apply -f install.yaml
	kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'

uninstall:
	-kubectl delete -f install.yaml
	-kubectl delete ns argocd

get-password:
	kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d | pbcopy

login:
	argocd login localhost
	argocd account update-password

install-rvstore:
	argocd app create rvstore --repo https://github.com/VergeOps/k8s-rvstore --path minikube --dest-name in-cluster --dest-namespace rvstore --sync-policy auto

delete-rvstore:
	argocd app delete rvstore