create-cluster:
	eksctl create cluster --name rvstore --version 1.16 --managed --asg-access --profile vergeops --region us-east-1 --nodes 1 --nodes-min 1 --nodes-max 5 --nodegroup-name rvstore-workers --node-type t3.medium

update-kubeconfig:
	eksctl utils write-kubeconfig --cluster rvstore --profile=vergeops --region=us-east-1

deploy-cluster-autoscaler:
	kubectl apply -f cluster-autoscaler-autodiscover.yaml
	kubectl -n kube-system annotate deployment.apps/cluster-autoscaler cluster-autoscaler.kubernetes.io/safe-to-evict="false"

delete-cluster:
	eksctl delete cluster --name rvstore --region us-east-1 --profile vergeops