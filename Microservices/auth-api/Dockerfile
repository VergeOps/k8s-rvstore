FROM golang as builder

WORKDIR /go/src/auth-api
COPY ./main.go .
COPY ./go.mod .

RUN go get -d -v ./...
RUN go install -v ./...
RUN ls

FROM ubuntu as final
COPY --from=builder /go/bin/auth-api /

ENTRYPOINT ["/auth-api"]