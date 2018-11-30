FROM alpine:latest
MAINTAINER Tim Solley
USER root

RUN apk update
RUN apk fetch openjdk8
RUN apk add openjdk8

ADD target/order-simulator-0.0.1-SNAPSHOT.jar /

ENTRYPOINT java -jar /order-simulator-0.0.1-SNAPSHOT.jar
