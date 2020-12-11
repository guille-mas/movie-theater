# Movie Theater App

Hey there, welcome to the wonderful Movie Theater App!
This file will hold any high level information you might need to start using the project.

## Demo

To run a local production demo you need:

- [Docker](https://www.docker.com/products/docker-desktop)
- GNUMake

### Start a production demo

- Run `make demo`

## Development

To run a local development container you need:

- [Docker](https://www.docker.com/products/docker-desktop)
- Docker Compose (included with "Docker for Desktop")
- GNUMake

### First time setup

- If you are using Docker for Desktop, you might need to add this folder to the list of shareable folders at Docker for Desktop settings
- Run `make setup`

### Start your development container

- Run `make start` will download an Alpine Linux development environment with node 14, React 16.8, create-react-app, and every other npm library required by the project.

Any change made while working on your IDE will be instantly reflected inside your containerized environment.

## Other commands

- `make sh` will start an sh prompt inside a development container as user node. \
This is the recommended way to go to run yarn or any other scripts in the exact same environment as other developers in your team.
- `make run` runs any command inside a development container.
- `make clean` removes any docker artifact.
- `make build` will bake your own docker artifacts.
