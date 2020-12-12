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

## Notes about the project

Every component implemented in this project was defined as pure functions, using custom and built-in hooks to manage state without writing more verbose classes. If you would like to see React components written as classes, I invite you to check my website's source code at https://github.com/guille-mas/blog.

I've added a few custom hooks to reuse the following features: communication with the backend, caching API responses, persisting user preferences. Custom hooks can be found at `movie-theater/src/hooks`

Replaced Babel with Typescript because I enjoy having static type checking as a safety net. Even more when I don't write any test.
I also like the possibility to write interfaces with the intention to document things I expect my code to deal with, such as: plugins, HTTP messages, and other kind of things. You can find one interface I've reused everywhere at `movie-theater/src/interfaces/movie.interface.ts`

Finally, I've choose to use Sass instead of CSS because it makes my code less verbose and more reusable.
