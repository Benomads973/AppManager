# Image Location
FROM node:18.18.0-alpine

RUN yarn global add yarn@latest &&\
    rm -rf /var/cache/apk/*

## WORKSPACE
WORKDIR /app

## GET CURRENT REPO
COPY package.json /app/
RUN yarn
COPY ./src ./src
COPY ./bin ./bin
#
ENTRYPOINT ["yarn", "prod"]