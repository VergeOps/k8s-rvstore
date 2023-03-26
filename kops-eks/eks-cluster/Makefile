create-cluster:
	eksctl create cluster --name rvstore --version 1.24 --managed --asg-access --region us-west-2 --nodes 1 --nodes-min 1 --nodes-max 4 --nodegroup-name rvstore-workers --node-type t3.small

update-kubeconfig:
	eksctl utils write-kubeconfig --cluster rvstore --region=us-west-2

deploy-cluster-autoscaler:
	kubectl apply -f cluster-autoscaler-autodiscover.yaml

deploy-metrics-server:
	kubectl apply -f metrics-server.yaml

deploy-load-tester:
	kubectl apply -f loadtester.yaml

deploy-cloudwatch-logs:
	kubectl apply -f cloudwatch-insights.yaml
	~/Downloads/eksctl utils update-cluster-logging --enable-types all --profile vergeops --region us-west-2 --cluster rvstore --approve

delete-cluster:
	eksctl delete cluster --name rvstore --region us-west-2