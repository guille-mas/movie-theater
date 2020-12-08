include .env
# speed up builds and improve build UI by enabling Docker Buildkit
export DOCKER_BUILDKIT=1

# starts a local production demo
demo:
	docker run --rm -p ${PORT}:${PORT} --name ${PROJECT_NAME}-demo \
		guillermomaschwitz/${PROJECT_NAME}:${PROJECT_VERSION}-production

# start development environment
start:
	docker-compose up

# stop development environment
stop: 
	docker-compose stop

# run any command inside an ephemeral container
run:
	@read -p "Write a command to run inside a disposable development container: " command; \
		docker-compose run --rm ${PROJECT_NAME} \
			sh -c "$$command"

# run any command inside an ephemeral container
exec:
	@read -p "Write a command to run inside a disposable development container: " command; \
		docker-compose exec ${PROJECT_NAME} \
			bash -c "$$command"


# build docker images
build:
	docker build -f ./docker/Dockerfile -t guillermomaschwitz/${PROJECT_NAME}:${PROJECT_VERSION} \
		-t guillermomaschwitz/${PROJECT_NAME}:${PROJECT_VERSION}-production \
		--target prod \
		--build-arg PORT=${PORT} \
		--build-arg PROJECT_NAME=${PROJECT_NAME} \
		./${PROJECT_NAME}
	docker build -f ./docker/Dockerfile -t guillermomaschwitz/${PROJECT_NAME}:${PROJECT_VERSION}-development \
		--target dev \
		--build-arg PORT=${PORT} \
		--build-arg PROJECT_NAME=${PROJECT_NAME} \
		./${PROJECT_NAME}

# install third party libraries required by dev environment
setup:
	docker-compose run --rm ${PROJECT_NAME} yarn

# wipe any docker image and containers
clean:
	docker-compose down --rmi all
	docker image rm -f guillermomaschwitz/${PROJECT_NAME}:${PROJECT_VERSION}
	docker image rm -f guillermomaschwitz/${PROJECT_NAME}:${PROJECT_VERSION}-production

# open a bash session inside the container
bash:
	docker-compose exec ${PROJECT_NAME} bash

# deploy to AWS S3 + Cloudfront
#deploy:

# push docker image to my DockerHub public repo
push:
	docker login -u guillermomaschwitz
	docker push guillermomaschwitz/${PROJECT_NAME}
