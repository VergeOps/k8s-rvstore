CLOUD_PROVIDER=aws
IMAGE=k8s.gcr.io/cluster-autoscaler:v1.2.2
MIN_NODES=1
MAX_NODES=2
AWS_REGION=us-west-2
# For AWS GROUP_NAME should be the name of ASG as seen on AWS console
GROUP_NAME="nodes.rvstore.k8s.local"
SSL_CERT_PATH="/etc/ssl/certs/ca-certificates.crt" # (/etc/ssl/certs for gce, /etc/ssl/certs/ca-bundle.crt for RHEL7.X)

kubectl apply -f cluster_autoscaler.yaml