FROM alpine:latest
MAINTAINER Tim Solley
USER root

RUN apk update
RUN apk fetch openjdk8
RUN apk add openjdk8

ADD target/gateway-service.jar /
ENTRYPOINT java -jar /gateway-service.jar