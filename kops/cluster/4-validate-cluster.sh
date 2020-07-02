# This command will wait and loop, checking your cluster to ensure it is ready for use

export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile=vergeops-kops)
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile=vergeops-kops)

kops validate cluster --wait 10m --state=s3://rvstore-k8s-state-store rvstore.k8s.local