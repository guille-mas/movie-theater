FROM node:14 AS prod
ARG PORT
ARG PROJECT_NAME
ENV PORT=${PORT}
ENV PROJECT_NAME=${PROJECT_NAME}
ENV TERM=xterm-256color
ENV NODE_ENV=production
USER node
COPY --chown=node:node ./ /home/node/${PROJECT_NAME}
WORKDIR /home/node/${PROJECT_NAME}
RUN yarn install
EXPOSE $PORT
CMD yarn start

FROM prod as dev
ENV NODE_ENV=development
RUN yarn install
EXPOSE 9229
