# Overview
This project is an express js api containerized with docker and orchestrated with docker-compose. It can also be deployed as a kubernetes cluster.
An image for the API is pushed into my personal docker hub : https://hub.docker.com/repository/docker/sambastraore/my_app/general

- Docker version 24.0.5, build ced0996
- Docker Compose version v2.20.2-desktop.1
- minikube version: v1.34.0
- kubectl 
    Client Version: v1.31.2
    Kustomize Version: v5.4.2
    Server Version: v1.31.0  

# Endpoints
- GET test/ : to get all employees in the table.
- GET test/employee/{id} : to get a specific employee
- DELETE test/employee/{id} : to delete a specific employee


# Execution Process
The name of the database is already set as an environment variable (employee_db) but in its current state, the endpoints are written to use a table named 'employees' with at least a field 'id'.

- To run the containers with docker compose (the **mysql_db** and the **expressjs_api** containers), move to the **express-project** directory and use this command : **docker-compose --env-file ./docker-compose.env up --build -d**
- If you have a kubernetes or minikube cluster, you can deploy the manifests in **k8s** folder (with the command **kubectl apply -f filename.yaml** for each manifest). Feel free to modify the number of replicas. 


# Testing the API
After that, the containers are running but to test the api, we need to have some data. 
For that, enter the mysql container in terminal mode and connect with root (the password is root) if you are using docker compose. If you are in a kubernetes cluster, you can access the mysql pod with this command : **kubectl exec -it mysql-pod-name -- /bin/bash**. Now, you can enter the mysql command using root as username and root as password.
Then, use these queries : 
1) USE employee_db;
  
2) CREATE TABLE employees (
id int NOT NULL AUTO_INCREMENT,
name varchar(45) DEFAULT NULL,
employee_code varchar(45) DEFAULT NULL,
salary int DEFAULT NULL,
PRIMARY KEY (id)
);

3) INSERT INTO employees VALUES 
(1,'Ndaraw Fall','EMP1',100000),
(2,'Abdoulaye Diallo','EMP2',100000),
(3,'Mohamed Dieng','EMP3',100000),
(4,'Mansour Kholle','EMP4',100000);

# Resources
If you are struggling with kubernetes or minikube commands, feel free to use these documentations : 
- https://minikube.sigs.k8s.io/docs/
- https://kubernetes.io/docs/home/
