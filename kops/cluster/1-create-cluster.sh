# This command will set up your cluster configuration. It does NOT create the actual resources in AWS

export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile=vergeops-kops)
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile=vergeops-kops)

kops create cluster --zones=us-west-2a --state=s3://rvstore-k8s-state-store rvstore.k8s.local