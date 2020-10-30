create-cluster:
	eksctl create cluster --name rvstore --version 1.16 --managed --asg-access --profile vergeops --region us-west-2 --nodes 1 --nodes-min 1 --nodes-max 5 --nodegroup-name rvstore-workers --node-type t3.medium

update-kubeconfig:
	eksctl utils write-kubeconfig --cluster rvstore --profile=vergeops --region=us-west-2

deploy-cluster-autoscaler:
	kubectl apply -f cluster-autoscaler-autodiscover.yaml
	kubectl -n kube-system annotate deployment.apps/cluster-autoscaler cluster-autoscaler.kubernetes.io/safe-to-evict="false"

deploy-cloudwatch-logs:
	kubectl apply -f cloudwatch-insights.yaml
	eksctl utils update-cluster-logging --enable-types all --profile vergeops --region us-east-1 --cluster rvstore --approve

delete-cluster:
	eksctl delete cluster --name rvstore --region us-west-2 --profile vergeops