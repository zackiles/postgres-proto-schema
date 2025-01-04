module github.com/zackiles/postgres-proto-schema

go 1.21

toolchain go1.22.3

require (
	buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go v1.36.1-20241127180247-a33202765966.1
	google.golang.org/protobuf v1.36.1
)

require golang.org/x/xerrors v0.0.0-20200804184101-5ec99f83aff1 // indirect

replace github.com/bufbuild/protovalidate => github.com/envoyproxy/protoc-gen-validate v0.6.7
