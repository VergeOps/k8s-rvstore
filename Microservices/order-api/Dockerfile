FROM alpine:latest

RUN apk update
RUN apk fetch openjdk8
RUN apk add openjdk8

ADD target/order-api-0.0.1-SNAPSHOT.jar /

ENTRYPOINT java -jar /order-api-0.0.1-SNAPSHOT.jar
