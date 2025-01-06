# Postgres Proto Schema

[![Buf Schema Registry](https://img.shields.io/badge/buf.build-postgres--proto--schema-blue)](https://buf.build/zackiles/postgres-proto-schema)
[![License](https://img.shields.io/github/license/zackiles/postgres-proto-schema)](LICENSE)

A Protobuf (proto3 and buf v2) schema definition for PostgreSQL, enabling type-safe database schema generation through protocol buffers. This package provides comprehensive PostgreSQL type support, validation, and platform-specific deployment options.

---

## Table of Contents
- [Postgres Proto Schema](#postgres-proto-schema)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [1. Proto Files (Recommended)](#1-proto-files-recommended)
    - [2. Pre-compiled SDKs](#2-pre-compiled-sdks)
    - [3. Generate Your Own SDK](#3-generate-your-own-sdk)
  - [Core Concepts](#core-concepts)
    - [Type System](#type-system)
    - [Type Options](#type-options)
    - [Table Configuration](#table-configuration)
    - [Column Options](#column-options)
    - [Constraints](#constraints)
    - [Composite Types](#composite-types)
  - [Advanced Features](#advanced-features)
    - [Built-in Patterns](#built-in-patterns)
      - [Timestamps Pattern](#timestamps-pattern)
      - [Audit Pattern](#audit-pattern)
    - [Platform Support](#platform-support)
    - [Validation](#validation)
  - [Examples](#examples)
    - [Basic Examples](#basic-examples)
    - [Intermediate Examples](#intermediate-examples)
    - [Advanced Examples](#advanced-examples)
  - [Development](#development)
    - [Project Structure](#project-structure)
    - [Buf Commands](#buf-commands)
  - [Contributing](#contributing)
  - [License](#license)
  - [Compatibility](#compatibility)
  - [Contact](#contact)

---

## Features
- Define PostgreSQL schemas using protocol buffers with:
  - **Rich Type System**: Comprehensive PostgreSQL types with detailed configuration options
  - **Table Configuration**: Names, schemas, indexes, constraints, RLS policies, partitioning
  - **Column Configuration**: Type-specific options, constraints, collation
  - **Platform Support**: Deployment options for major PostgreSQL platforms (RDS, Aurora, etc.)
  - **Built-in Patterns**: Support for timestamps and audit tracking
  - **Validation**: Built-in field validation using buf validate

---

## Installation

This package can be used in three ways:

### 1. Proto Files (Recommended)

Use the proto files directly through the Buf Schema Registry:

```yaml
# buf.yaml
version: v1
deps:
  - buf.build/zackiles/postgres-proto-schema
  - buf.build/bufbuild/protovalidate # Required for field validation rules
```

Import the proto files in your schema:
```proto
import "postgres_proto_schema/v1/schema.proto";  // Main entrypoint
import "buf/validate/validate.proto";            // For validation rules
```

The proto files are also available directly on [GitHub](https://github.com/zackiles/postgres-proto-schema/tree/main/proto/postgres_proto_schema).

### 2. Pre-compiled SDKs

We provide pre-compiled code for Go and TypeScript and Javascript. At the moment we don't publish npm or go mods, but will soon! You can copy the files to your project source to include them manually for now:

1. For the TypeScript and Javascript SDKs:
```bash
# Ran in your project workspace. Copies to ./src/postgres-proto-schema
git clone --depth 1 --filter=blob:none --sparse https://github.com/zackiles/postgres-proto-schema ./src/postgres-proto-schema && cd ./src/postgres-proto-schema && git sparse-checkout set gen/ts

# Then import. Example:
# import * as Schema from './src/postgres-proto-schema/gen/ts/schema_pb.js (or .ts/.d.ts)'
# Node, you'll need to npm install @bufbuild/protobuf to use this SDK.
```

2. For the Go SDK:
```bash
# Ran in your project workspace. Copies to ./internal/postgres-proto-schema
git clone --depth 1 --filter=blob:none --sparse https://github.com/zackiles/postgres-proto-schema ./internal/postgres-proto-schema && cd ./internal/postgres-proto-schema && git sparse-checkout set gen/go

# Then import it. Example:
# import "myproject/internal/postgres-proto-schema/v1"
```

### 3. Generate Your Own SDK

Generate code for your preferred language using buf:

```yaml
# buf.gen.yaml
version: v1
plugins:
  - plugin: go
    out: gen/go
    opt: paths=source_relative
  - plugin: typescript
    out: gen/ts
    opt: paths=source_relative
```

Then run:
```bash
buf generate
```

---

## Core Concepts

### Type System

The package provides a comprehensive set of PostgreSQL types through the `Type` enum:

| Category | Types |
|----------|-------|
| **Basic** | `TYPE_TEXT`, `TYPE_INTEGER`, `TYPE_BIGINT`, `TYPE_BOOLEAN`, `TYPE_TIMESTAMP`, `TYPE_TIMESTAMPTZ`, `TYPE_UUID`, `TYPE_JSONB`, `TYPE_VARCHAR`, `TYPE_NUMERIC` |
| **Serial** | `TYPE_SERIAL`, `TYPE_BIGSERIAL`, `TYPE_SMALLSERIAL` |
| **Temporal** | `TYPE_DATE`, `TYPE_TIME`, `TYPE_INTERVAL` |
| **Binary** | `TYPE_BYTEA` |
| **Network** | `TYPE_INET`, `TYPE_CIDR`, `TYPE_MACADDR` |
| **Geometric** | `TYPE_POINT`, `TYPE_LINE`, `TYPE_POLYGON`, etc. |
| **Full Text** | `TYPE_TSVECTOR`, `TYPE_TSQUERY` |

### Type Options

Many types support additional configuration through type-specific options:

```proto
message Column {
  string email = 1 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_VARCHAR
    varchar: {
      length: 255
      collation: "en_US"
    }
  }];
}
```

### Table Configuration

Tables support comprehensive PostgreSQL configuration:

```proto
message MyTable {
  option (.postgres_proto_schema.v1.table_options) = {
    table_name: "my_table"
    schema: "public"
    tablespace: "fast_disk"
    is_unlogged: false
    is_temporary: false
    
    // Storage parameters
    storage_parameters: {
      key: "fillfactor"
      value: "70"
    }

    // Indexes
    indexes: [{
      name: "my_index"
      columns: ["column1", "column2"]
      index_method: INDEX_METHOD_BTREE
      unique: true
      where_clause: "deleted_at IS NULL"
    }]

    // Row Level Security
    rls_policies: [{
      name: "tenant_isolation"
      using_expression: "tenant_id = current_tenant_id()"
      with_check_expression: "tenant_id = current_tenant_id()"
      role: "authenticated"
    }]

    // Partitioning
    partitioning: {
      method: PARTITION_METHOD_RANGE
      keys: ["created_at"]
    }
  };
}
```

### Column Options

Different column types support specific configuration options:

```proto
message TypeExamples {
  // VARCHAR with collation
  string text = 1 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_VARCHAR
    varchar: {
      length: 255
      collation: "en_US"
    }
  }];

  // NUMERIC with precision
  double amount = 2 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_NUMERIC
    numeric: {
      precision: 10
      scale: 2
    }
  }];

  // TIMESTAMP with timezone
  string created_at = 3 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_TIMESTAMPTZ
    time: {
      precision: 6
    }
  }];
}
```

### Constraints

Available constraint types:
- `CONSTRAINT_TYPE_PRIMARY_KEY`
- `CONSTRAINT_TYPE_NOT_NULL`
- `CONSTRAINT_TYPE_UNIQUE`
- `CONSTRAINT_TYPE_CHECK`
- `CONSTRAINT_TYPE_FOREIGN_KEY`
- `CONSTRAINT_TYPE_EXCLUSION`

Example:
```proto
message Order {
  int32 id = 1 [(postgres_proto_schema.v1.column_options) = {
    constraints: [{
      type: CONSTRAINT_TYPE_PRIMARY_KEY
    }]
  }];

  int32 user_id = 2 [(postgres_proto_schema.v1.column_options) = {
    constraints: [{
      type: CONSTRAINT_TYPE_FOREIGN_KEY
      foreign_key: {
        foreign_table: "users"
        foreign_column: "id"
      }
    }]
  }];
}
```

### Composite Types

You can mark messages as PostgreSQL composite types:

```proto
message Address {
  option (.postgres_proto_schema.v1.is_composite_type) = true;

  string street = 1 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_VARCHAR
    varchar: { length: 255 }
  }];
  string city = 2 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_VARCHAR
    varchar: { length: 100 }
  }];
}
```

---

## Advanced Features

### Built-in Patterns

The package provides two built-in patterns for common PostgreSQL table requirements:

#### Timestamps Pattern
Automatically adds created_at, updated_at, and deleted_at columns:
```proto
message User {
  option (.postgres_proto_schema.v1.timestamps) = {
    track_created: true
    track_updated: true
    track_deleted: true
  };
}
```

#### Audit Pattern
Tracks record creators and updaters:
```proto
message User {
  option (.postgres_proto_schema.v1.audit) = {
    track_creator: true
    track_updater: true
    audit_schema: "audit"
  };
}
```

### Platform Support

The package includes built-in support for major PostgreSQL platforms through the `Platform` enum:

| Category | Platforms |
|----------|-----------|
| **Cloud** | `PLATFORM_RDS`, `PLATFORM_AURORA`, `PLATFORM_CLOUD_SQL`, `PLATFORM_AZURE` |
| **Managed** | `PLATFORM_HEROKU`, `PLATFORM_DIGITALOCEAN`, `PLATFORM_SUPABASE` |
| **Enterprise** | `PLATFORM_ENTERPRISEDB`, `PLATFORM_TIMESCALEDB`, `PLATFORM_CRUNCHY` |
| **Versions** | `PLATFORM_15`, `PLATFORM_16`, `PLATFORM_17` |

### Validation

This package includes both compile-time and runtime validation through [protovalidate](https://buf.build/bufbuild/protovalidate/docs/main:buf.validate):

```proto
message User {
  string email = 1 [(buf.validate.field).string.email = true];
  
  int32 age = 2 [(buf.validate.field).int32 = {
    gte: 0
    lte: 120
  }];
}
```

For runtime validation in Go:
```go
import "github.com/bufbuild/protovalidate-go"

validator, err := protovalidate.New()
if err != nil {
    log.Fatal(err)
}

if err := validator.Validate(msg); err != nil {
    log.Printf("validation failed: %v", err)
}
```

See the [protovalidate documentation](https://buf.build/bufbuild/protovalidate/docs/main:buf.validate) for more validation options and language-specific usage.

---

## Examples

### Basic Examples
```proto
// Simple table with basic columns
message User {
  option (.postgres_proto_schema.v1.table_options) = {
    table_name: "users"
    schema: "public"
  };

  int32 id = 1 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_SERIAL
    constraints: [{ type: CONSTRAINT_TYPE_PRIMARY_KEY }]
  }];

  string email = 2 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_VARCHAR
    varchar: { length: 255 }
    constraints: [{ type: CONSTRAINT_TYPE_UNIQUE }]
  }];
}
```

### Intermediate Examples
```proto
// Multi-tenant table with RLS and timestamps
message TenantResource {
  option (.postgres_proto_schema.v1.table_options) = {
    table_name: "tenant_resources"
    schema: "public"
    indexes: [{
      name: "tenant_resources_tenant_id_idx"
      columns: ["tenant_id"]
    }]
    rls_policies: [{
      name: "tenant_isolation"
      using_expression: "tenant_id = current_tenant_id()"
    }]
  };
  
  option (.postgres_proto_schema.v1.timestamps) = {
    track_created: true
    track_updated: true
  };

  string tenant_id = 1 [(postgres_proto_schema.v1.column_options) = {
    type: TYPE_UUID
    constraints: [{ type: CONSTRAINT_TYPE_NOT_NULL }]
  }];
}
```

### Advanced Examples
```proto
// Complex table with multiple features
message Product {
  option (.postgres_proto_schema.v1.table_options) = {
    table_name: "products"
    schema: "inventory"
    partitioning: {
      method: PARTITION_METHOD_RANGE
      keys: ["created_at"]
    }
    indexes: [{
      name: "products_search_idx"
      columns: ["name", "description"]
      index_method: INDEX_METHOD_GIN
      expression: "to_tsvector('english', name || ' ' || description)"
    }]
  };

  option (.postgres_proto_schema.v1.timestamps) = {
    track_created: true
    track_updated: true
    track_deleted: true
  };

  option (.postgres_proto_schema.v1.audit) = {
    track_creator: true
    track_updater: true
  };

  // ... columns
}
```

---

## Development

### Project Structure
```
postgres_proto_schema/
├── proto/
│   └── postgres_proto_schema/
│       └── v1/
│           ├── schema.proto    # Core schema definitions and extensions
│           ├── table.proto     # Table-specific options and types
│           ├── column.proto    # Column-specific options and types
│           └── common.proto    # Shared types and enums
├── gen/                        # Generated code directory
│   ├── ts/                    # TypeScript generated code
│   └── go/                    # Go generated code
├── buf.yaml                   # Buf module definition
└── buf.gen.yaml              # Code generation configuration
```

### Buf Commands
1. **Lint the Protobuf files**:
   ```bash
   buf lint
   ```
2. **Build and validate the module**:
   ```bash
   buf build
   ```
3. **Push the module to the Buf Schema Registry**:
   ```bash
   buf push
   ```

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a detailed description of your changes.

---

## License
This project is licensed under the MIT License. See `LICENSE` for details.

---

## Compatibility

- PostgreSQL: 12+
- Protocol Buffers: 3
- Go: 1.21+
- TypeScript: 4.5+

---

## Contact
For questions, suggestions, or support, open an issue on the GitHub repository.
