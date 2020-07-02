# This command will open the cluster configuration (stored in S3) to let you modify the config

export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile=vergeops-kops)
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile=vergeops-kops)

# Let's update the max size of the autoscaling group for the worker nodes
kops edit ig --name rvstore.k8s.local nodes --state=s3://rvstore-k8s-state-store