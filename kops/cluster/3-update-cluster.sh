# This command actually creates the physical cluster resources in AWS
# It will also configure your local kubectl config to add a context so that you can manage your cluster.

export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile=vergeops-kops)
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile=vergeops-kops)

kops update cluster --state=s3://rvstore-k8s-state-store --yes rvstore.k8s.local