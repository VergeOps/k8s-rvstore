FROM golang as builder

WORKDIR /go/src/product-api
COPY ./main.go .
COPY ./go.mod .

RUN go get -d -v ./...
RUN go install -v ./...
RUN ls

FROM ubuntu as final
RUN mkdir /data && mkdir /data/products && mkdir /data/products/container
COPY products.json /data/products/container
COPY --from=builder /go/bin/product-api /

ENTRYPOINT ["/product-api"]