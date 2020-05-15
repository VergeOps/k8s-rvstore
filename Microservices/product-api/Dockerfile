FROM golang

WORKDIR /go/src/product-api
COPY ./main.go .

RUN ls -la

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["product-api"]