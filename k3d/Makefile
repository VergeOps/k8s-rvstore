install-k3d:
	wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash

create-cluster:
	k3d cluster create k3d --agents 2 -p "30080:30080@server:0" -p "30090:30090@server:0" -p "30800:30800@server:0"

delete-cluster:
	k3d cluster delete k3d

start:
	k3d cluster start k3d

stop:
	k3d cluster stop k3d