# This command deletes the physical cluster from AWS

export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile=vergeops-kops)
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile=vergeops-kops)

kops delete cluster --name rvstore.k8s.local --state=s3://rvstore-k8s-state-store --yes