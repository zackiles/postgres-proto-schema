// See: buf descriptors https://buf.build/docs/reference/descriptors/
// See: buf files and packages https://buf.build/docs/reference/protobuf-files-and-packages/

// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+dts+js,import_extension=none,json_types=true,ts_nocheck=true"
// @generated from file postgres_proto_schema/v1/schema.proto (package postgres_proto_schema.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

// Package documentation
// This package provides PostgreSQL extensions for protocol buffers,
// allowing detailed database schema definitions through proto messages.

import { extDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_descriptor } from "../../google/protobuf/descriptor_pb";
import { file_postgres_proto_schema_v1_column } from "./column_pb";
import { file_postgres_proto_schema_v1_table } from "./table_pb";

/**
 * Describes the file postgres_proto_schema/v1/schema.proto.
 */
export const file_postgres_proto_schema_v1_schema = /*@__PURE__*/
  fileDesc("CiVwb3N0Z3Jlc19wcm90b19zY2hlbWEvdjEvc2NoZW1hLnByb3RvEhhwb3N0Z3Jlc19wcm90b19zY2hlbWEudjE6bgoNdGFibGVfb3B0aW9ucxIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxjQhgMgASgLMiYucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLlRhYmxlT3B0aW9uc1IMdGFibGVPcHRpb25zOk0KEWlzX2NvbXBvc2l0ZV90eXBlEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGJDFAyABKAhSD2lzQ29tcG9zaXRlVHlwZTpwCgp0aW1lc3RhbXBzEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGNKGAyABKAsyLS5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuUGF0dGVybnMuVGltZXN0YW1wc1IKdGltZXN0YW1wczphCgVhdWRpdBIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxjThgMgASgLMigucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLlBhdHRlcm5zLkF1ZGl0UgVhdWRpdDpvCg5jb2x1bW5fb3B0aW9ucxIdLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMYuI4DIAEoCzInLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MS5Db2x1bW5PcHRpb25zUg1jb2x1bW5PcHRpb25zQr4BChxjb20ucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxQgtTY2hlbWFQcm90b1ABWhhwb3N0Z3Jlc19wcm90b19zY2hlbWEvdjGiAgNQWFiqAhZQb3N0Z3Jlc1Byb3RvU2NoZW1hLlYxygIWUG9zdGdyZXNQcm90b1NjaGVtYVxWMeICIlBvc3RncmVzUHJvdG9TY2hlbWFcVjFcR1BCTWV0YWRhdGHqAhdQb3N0Z3Jlc1Byb3RvU2NoZW1hOjpWMWIGcHJvdG8z", [file_google_protobuf_descriptor, file_postgres_proto_schema_v1_column, file_postgres_proto_schema_v1_table]);

/**
 * @generated from extension: postgres_proto_schema.v1.TableOptions table_options = 50000;
 */
export const table_options = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_schema, 0);

/**
 * @generated from extension: bool is_composite_type = 58000;
 */
export const is_composite_type = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_schema, 1);

/**
 * @generated from extension: postgres_proto_schema.v1.Patterns.Timestamps timestamps = 50002;
 */
export const timestamps = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_schema, 2);

/**
 * @generated from extension: postgres_proto_schema.v1.Patterns.Audit audit = 50003;
 */
export const audit = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_schema, 3);

/**
 * @generated from extension: postgres_proto_schema.v1.ColumnOptions column_options = 51000;
 */
export const column_options = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_schema, 4);

