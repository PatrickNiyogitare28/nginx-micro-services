# the-micro-services-challenge
Building A micro-service of Springboot, Node, js React services to be shipped with Docker container

## Service

The challenge implements 3 services that work together to process and request and serve an appropriate response.

## Authentication Service

This is the service built with Java Springboot with mavin as a dependency manager. And it's responsible to create user acccounts and keep track of them,  a basic authentication.
It saves the accounts in a hash map. That means the data are persisted while the container is or the service is up.

In docker or on the host machine this service is running on 8080


The service is started like any other java springboot is run.

## Authorization Service

This is the service serving as a middleware between the client or frontend service and the authentication service. That means it receives the data access requests
and first talk to the authentication service to find the user authority .

It also assigns encrypted jwt tokens to authenticated users.
It also serves the medical data from an **xlsx** file according to the user role.

The service parses the **xlsx** data file and be able to extract sheets that are served to client on a request.

Running on a host in development

```sh
$ yarn start:dev
# npm start:dev
```

Running on the host in production

```sh
$ yarn start
# npm run start
```

## Fronted Service

This service provides a user interface that allows users to create accounts and be able to request medical data.

Running the service 

```sh
$ yarn dev
# npm run dev
```

## Containerization

Though these services can run on a host machine, but they can also run in docker containers and be able to still communicate using **docker-compose**

Running the image.

```sh
$ docker-compose up
```

## Author
patrickniyogitare28@gmail.ccom
