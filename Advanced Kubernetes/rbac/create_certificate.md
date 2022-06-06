# Let’s create a new user certificate request.

### Create a new directory to work with these files: 
`sudo mkdir -p ~/k8s/certs`
### Generate a new private key:
`sudo openssl genrsa -out ~/k8s/certs/testuser.key 2048`
### Generate the certificate signing request:
`sudo openssl req -new -key ~/k8s/certs/testuser.key -out ~/k8s/certs/testuser.csr -subj "/CN=testuser/O=devs"`
### Get the Base64 encoded CSR and copy to clipboard
`cat ~/k8s/certs/testuser.csr | base64 | tr -d "\n" | pbcopy`
### Paste the CSR into the csr.yaml file
Open the file csr.yaml (in the Advanced Kubernetes/rbac directory) and paste this content into the key named "request"
Now apply the file to your cluster with `kubectl apply -f csr.yaml --validate=false`

### Approve the CSR as an administrator
`kubectl certificate approve testuser`

### Retrieve the certificate from the approved CSR
`sudo kubectl get csr testuser -o jsonpath='{.status.certificate}'| base64 --decode > testuser.crt`
### Copy the file
`sudo cp testuser.crt ~/k8s/certs`

# Now that we have our certificate, let’s set up Kubectl to use it.
### First, create a credential with the certificate
`sudo kubectl config set-credentials testuser@local --client-certificate=$HOME/k8s/certs/testuser.crt --client-key=$HOME/k8s/certs/testuser.key --embed-certs=true`
### Set a context which will match up the cluster and your new credential
`sudo kubectl config set-context testuser@local --cluster=docker-desktop --user=testuser@local`
### Set kubectl to use this new context
`sudo kubectl config use-context testuser@local`
### Now try to get some information, like pods. You should see a permission error.