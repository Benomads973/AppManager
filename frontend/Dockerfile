# Image Location
FROM node:18.18.0-alpine as builder

RUN yarn global add yarn@latest &&\
    rm -rf /var/cache/apk/*

## WORKSPACE
WORKDIR /app

COPY package.json /app/
RUN yarn
COPY . .
RUN yarn build

FROM nginx:stable-alpine3.17-slim as prod-stage
RUN rm -rvf /usr/share/nginx/html/*
COPY --from=builder /app/build/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]


#RUN ls;ls -R output/*;echo 1 
#ADD output/ 
# RUN chmod +x ./entrypoint.sh
#ENV CONTAINER_PORT=$APP_PORT
#
#RUN echo "$CONTAINER_PORT"
#
#EXPOSE $CONTAINER_PORT
#RUN sed -ie "s/\(listen.*\)[: ]\d\+;/\1$CONTAINER_PORT;/" /etc/nginx/conf.d/default.conf