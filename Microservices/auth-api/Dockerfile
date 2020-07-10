FROM golang

WORKDIR /go/src/auth-api
COPY ./main.go .

RUN ls -la

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["auth-api"]