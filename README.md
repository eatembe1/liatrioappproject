# liatrioappproject
Tittle: terraform code to provision cluster in AWS EKS
This code will provision the following infrastructure:
- VPC with two subenets a private and public
- Autoscaling to scale max 4 and min 2 and Load balancer to control traffic
- Security groups to secure the instances (nodes) 
- Kubernetes Clusters with worker nodes and a master (managed by aws)
It is made up of the following files:
1) Provider.tf to specify the provider and region for the infrastructure
2) eks-cluster.tf ti provision:
- An IAM role to allow EKS service to manage other AWS services like Load balancer and autoscaling
- EC2 SG to allow networking traffic within the EKS cluster
- EKS clusters
- 3) eks-worker-nodes.tf to provision 
1) Another IAM role allowing Kubernetes actions to access other AWS services because we expect the worker nodes to scale in case of traffic. 
2) create EKS node group to launch worker nodes
3) 
