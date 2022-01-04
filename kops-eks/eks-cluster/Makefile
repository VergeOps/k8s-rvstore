create-cluster:
	~/Downloads/eksctl create cluster --name rvstore --version 1.21 --managed --asg-access --profile vergeops --region us-west-2 --nodes 1 --nodes-min 1 --nodes-max 1 --nodegroup-name rvstore-workers --node-type t3.micro

update-kubeconfig:
	~/Downloads/eksctl utils write-kubeconfig --cluster rvstore --profile=vergeops --region=us-west-2

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
	~/Downloads/eksctl delete cluster --name rvstore --region us-west-2 --profile vergeops