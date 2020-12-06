# Movie Theater App

Hey there, welcome to the wonderful Movie Theater App!
This file will hold any high level information you might need to start using the project.

## Requirements

- Docker engine
- Docker Compose
- GNUMake

## First time setup

- [Install Docker and docker-compose](https://www.docker.com/products/docker-desktop)
  - If you are using Docker for Desktop, you might need to add this folder to the list of shareable folders at Docker for Desktop settings
- Run `make setup`

## Start your development environment

- Run `make start` will download an ubuntu-based development environment with node 14, React 16.8, create-react-app, and every other npm library required by the project.

Any change made while working on your IDE will be instantly reflected inside your containerized environment.

## Other commands

- `make bash` will start a bash prompt inside your container. \
This is the recommended way to go to install new npm packages or run node scripts in the exact same environment as other developers in your team.
- `make run` runs any command inside a use-once ephemeral development container.
- `make clean` removes any docker artifact.
- `make build` will bake your own docker artifacts.
- `make deploy` will deploy to an AWS S3 bucket, served through CloudFront for faster load times
