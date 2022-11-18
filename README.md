# VergeOps Docker and Kubernetes courseware

This is the courseware for Tim Solley's Docker and Kubernetes courses. It includes exercise files for lectures as well as a Hackthon application for students to practice the concepts they learn in class.

# Setup Instructions
You'll need to install a container runtime for this course. You have a couple of good options:
## Docker Desktop
<img src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" style="padding:10px;" width="100"/>

With Docker Desktop, you'll get a managed Kubernetes cluster after some initial setup.
**IMPORTANT**: This has a potential license issue, as Docker charges larger companies a per-seat license fee. It is free for your personal/educational use. It is free for use during class, but a license requirement applies once the class is over. If you're unsure, check with your company management or choose the Rancher Desktop option below. For more details on Docker's license and whether it applies to you at work, visit their [FAQ](https://www.docker.com/pricing/faq/#subscriptionandlicensing).
1. Visit [docker.com](https://www.docker.com)
1. Click the install link in the center of the page. Be careful if you're on a Mac to choose the correct chip. It defaults to Intel Macs. If you're unsure, look at the Apple menu on your computer, then `About This Mac`.
1. Once installed, open the Docker application.
1. You'll have Docker menu on your computer (whale logo). Click it and choose the `Signup/Signin to Docker Hub` option. This will open a browser to Docker Hub where you can login or sign up for a free account.
1. (For Kubernetes courses) Install Kubernetes
    1. Once you're signed in, open the Docker menu again and choose `Preferences`. Then go to the `Kubernetes` section. Check the box for `Enable Kubernetes` then click the `Apply and Restart` button. This will begin the Kubernetes setup process which usually takes 10-15 minutes.
    1. Once finished, you'll be able to open a terminal and run `kubectl get all` and get some output that is clearly not a connection error.

## Rancher Desktop
<img src="https://www.rancher.com/assets/img/brand-guidelines/assets/logos/png/color/rancher-logo-stacked-color.png" style="padding:10px;" width="100">

A great open-source option with no license issues. Rancher Desktop comes with automatic Kubernetes support.
1. Visit [rancherdesktop.io](https://www.rancherdesktop.io)
1. Scroll down to the installer section and pick the correct installer. Be careful if you're on a Mac to choose the correct chip. It defaults to Intel Macs. If you're unsure, look at the Apple menu on your computer, then `About This Mac`.
1. Follow the installation instructions. When prompted for for container engine, choose `dockerd (moby)`. When prompted for a Kubernetes version, choose the latest stable release.

## Optional Multi-Node Kubernetes Cluster
k3d offers a great way to start up a multi-node cluster on your local workstation using Docker containers as Kubernetes nodes. This allows you to work in a simulated large cluster environment to practice cluster management. I've tested this using Rancher Desktop, but it should work fine for Docker Desktop.
1. Visit [k3d.io](https://www.k3d.io) for more detailed instructions.
1. In a terminal, run `wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash`. Alternatively, you can use Homebrew with `brew install k3d`
1. Set up your cluster. In this repository, navigate to the `k3d` directory. Run `make create-cluster` or open the `Makefile` and grab the command and run it.
1. To switch your Kubernetes context to the k3d cluster, run `kubectl config use-context k3d-k3d`


# Repository Tour
This repository is used for all of Tim Solley's Docker and Kubernetes courses, beginning through expert. As such, not all areas will be relevant to all students.

## Docker Classes
* docker-compose.yml - used for Compose running of the RV Store application
* Microservices - The full source code for the RV Store example application. Includes all code, Dockerfiles, Makefiles with useful commands, etc.

## Kubernetes Classes
* Advanced Kubernetes - contains a variety of sub directories with files on advanced topics such as RBAC, initContainers, high availability, etc.
* argocd - scripts for installing ArgoCD into a cluster
* elk - scripts for installing the EFK (Elasticsearch, FluentD, Kibana) stack into a cluster
* exercises/day 4 - labs for various topics
* extras - helpful kubectl commands
* helm - the RV Store application built using the Helm package manager
* ingress - an ingress and ingress controller configured for the RV Store application
* Microservices - The full source code for the RV Store example application. Includes all code, Dockerfiles, Makefiles with useful commands, etc.
* minikube - Kubernetes manifest files for the RV Store example application.
* rvstore_hackathon - contains information relevant to the RV Store Hackathon. For instructions, view the `Kubernetes-RV Store Hackathon.pdf` file.

---

### All content is copyright VergeOps, LLC
For more information, visit [VergeOps](https://www.vergeops.com). Questions about this repository can be directed to [Tim Solley](mailto:tsolley@vergeops.com)
