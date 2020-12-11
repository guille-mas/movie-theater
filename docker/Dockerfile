FROM node:14-alpine AS builder
ARG PORT
ARG PROJECT_NAME
ENV PORT=${PORT}
ENV PROJECT_NAME=${PROJECT_NAME}
ENV TERM=xterm-256color
ENV NODE_ENV=production
USER node
COPY --chown=node:node ./ /home/node/${PROJECT_NAME}
WORKDIR /home/node/${PROJECT_NAME}
RUN yarn --frozen-lockfile
#RUN yarn lint & yarn test
RUN yarn build
RUN yarn autoclean

FROM node:14-alpine AS prod
ENV NODE_ENV=production
RUN yarn global add serve
USER node
ARG PORT
ARG PROJECT_NAME
ENV PORT=${PORT}
ENV TERM=xterm-256color
WORKDIR /home/node/${PROJECT_NAME}
COPY --chown=node --from=builder /home/node/${PROJECT_NAME}/build ./build
COPY --chown=node --from=builder /home/node/${PROJECT_NAME}/node_modules ./node_modules
EXPOSE $PORT
CMD [ "serve", "-s", "build" ]

FROM prod as dev
ENV NODE_ENV=development
EXPOSE 9229
CMD ["yarn", "start"]
