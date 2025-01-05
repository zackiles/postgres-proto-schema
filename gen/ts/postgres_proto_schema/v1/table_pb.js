// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+dts+js,import_extension=none,json_types=true,ts_nocheck=true"
// @generated from file postgres_proto_schema/v1/table.proto (package postgres_proto_schema.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import { file_google_protobuf_descriptor } from "../../google/protobuf/descriptor_pb";
import { file_postgres_proto_schema_v1_column } from "./column_pb";
import { file_postgres_proto_schema_v1_common } from "./common_pb";

/**
 * Describes the file postgres_proto_schema/v1/table.proto.
 */
export const file_postgres_proto_schema_v1_table = /*@__PURE__*/
  fileDesc("CiRwb3N0Z3Jlc19wcm90b19zY2hlbWEvdjEvdGFibGUucHJvdG8SGHBvc3RncmVzX3Byb3RvX3NjaGVtYS52MSL6AQoPSW5kZXhEZWZpbml0aW9uEjEKBG5hbWUYASABKAlCI7pIIHIeEAEYPzIYXlthLXpBLVpfXVthLXpBLVowLTlfXSokEh8KB2NvbHVtbnMYAiADKAlCDrpIC5IBCAgBIgRyAhABEhwKCmV4cHJlc3Npb24YAyABKAlCCLpIBXIDGP8BEkUKDGluZGV4X21ldGhvZBgEIAEoDjIlLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MS5JbmRleE1ldGhvZEIIukgFggECEAESDgoGdW5pcXVlGAUgASgIEh4KDHdoZXJlX2NsYXVzZRgGIAEoCUIIukgFcgMY/wEiawoMUGFydGl0aW9uaW5nEkMKBm1ldGhvZBgBIAEoDjIpLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MS5QYXJ0aXRpb25NZXRob2RCCLpIBYIBAhABEhYKBGtleXMYAiADKAlCCLpIBZIBAggBIpIBChZSb3dMZXZlbFNlY3VyaXR5UG9saWN5EhUKBG5hbWUYASABKAlCB7pIBHICEAESIQoQdXNpbmdfZXhwcmVzc2lvbhgCIAEoCUIHukgEcgIQARInChV3aXRoX2NoZWNrX2V4cHJlc3Npb24YAyABKAlCCLpIBXIDGP8BEhUKBHJvbGUYBCABKAlCB7pIBHICEAEiqgEKCFBhdHRlcm5zGlEKClRpbWVzdGFtcHMSFQoNdHJhY2tfY3JlYXRlZBgBIAEoCBIVCg10cmFja191cGRhdGVkGAIgASgIEhUKDXRyYWNrX2RlbGV0ZWQYAyABKAgaSwoFQXVkaXQSFQoNdHJhY2tfY3JlYXRvchgBIAEoCBIVCg10cmFja191cGRhdGVyGAIgASgIEhQKDGF1ZGl0X3NjaGVtYRgDIAEoCSLuBQoMVGFibGVPcHRpb25zEhsKCnRhYmxlX25hbWUYASABKAlCB7pIBHICEAESFwoGc2NoZW1hGAIgASgJQge6SARyAhABEhsKCnRhYmxlc3BhY2UYAyABKAlCB7pIBHICEAESEwoLaXNfdW5sb2dnZWQYBCABKAgSFAoMaXNfdGVtcG9yYXJ5GAUgASgIEjoKB2luZGV4ZXMYBiADKAsyKS5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuSW5kZXhEZWZpbml0aW9uEj8KEXRhYmxlX2NvbnN0cmFpbnRzGAcgAygLMiQucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLkNvbnN0cmFpbnQSWQoSc3RvcmFnZV9wYXJhbWV0ZXJzGAggAygLMj0ucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLlRhYmxlT3B0aW9ucy5TdG9yYWdlUGFyYW1ldGVyc0VudHJ5EjwKDHBhcnRpdGlvbmluZxgJIAEoCzImLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MS5QYXJ0aXRpb25pbmcSRgoMcmxzX3BvbGljaWVzGAogAygLMjAucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLlJvd0xldmVsU2VjdXJpdHlQb2xpY3kSGgoJY29sbGF0aW9uGAwgASgJQge6SARyAhABEhgKB3N0b3JhZ2UYDSABKAlCB7pIBHICEAESHAoLY29tcHJlc3Npb24YDiABKAlCB7pIBHICEAESIgoRc3RhdGlzdGljc190YXJnZXQYDyABKAVCB7pIBBoCIAASSQoRZGVwbG95bWVudF9vcHRpb24YECABKA4yIi5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuUGxhdGZvcm1CCrpIB4IBBBABGCIaOAoWU3RvcmFnZVBhcmFtZXRlcnNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBSgUIZBDIASJbCgVUYWJsZRIVCgRuYW1lGAEgASgJQge6SARyAhABEjsKB2NvbHVtbnMYAiADKAsyIC5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuQ29sdW1uQgi6SAWSAQIIASq3AQoLSW5kZXhNZXRob2QSHAoYSU5ERVhfTUVUSE9EX1VOU1BFQ0lGSUVEEAASFgoSSU5ERVhfTUVUSE9EX0JUUkVFEAESFQoRSU5ERVhfTUVUSE9EX0hBU0gQAhIVChFJTkRFWF9NRVRIT0RfR0lTVBADEhcKE0lOREVYX01FVEhPRF9TUEdJU1QQBBIUChBJTkRFWF9NRVRIT0RfR0lOEAUSFQoRSU5ERVhfTUVUSE9EX0JSSU4QBiqFAQoPUGFydGl0aW9uTWV0aG9kEiAKHFBBUlRJVElPTl9NRVRIT0RfVU5TUEVDSUZJRUQQABIaChZQQVJUSVRJT05fTUVUSE9EX1JBTkdFEAESGQoVUEFSVElUSU9OX01FVEhPRF9IQVNIEAISGQoVUEFSVElUSU9OX01FVEhPRF9MSVNUEANCvQEKHGNvbS5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjFCClRhYmxlUHJvdG9QAVoYcG9zdGdyZXNfcHJvdG9fc2NoZW1hL3YxogIDUFhYqgIWUG9zdGdyZXNQcm90b1NjaGVtYS5WMcoCFlBvc3RncmVzUHJvdG9TY2hlbWFcVjHiAiJQb3N0Z3Jlc1Byb3RvU2NoZW1hXFYxXEdQQk1ldGFkYXRh6gIXUG9zdGdyZXNQcm90b1NjaGVtYTo6VjFiBnByb3RvMw", [file_buf_validate_validate, file_google_protobuf_descriptor, file_postgres_proto_schema_v1_column, file_postgres_proto_schema_v1_common]);

/**
 * Describes the message postgres_proto_schema.v1.IndexDefinition.
 * Use `create(IndexDefinitionSchema)` to create a new message.
 */
export const IndexDefinitionSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 0);

/**
 * Describes the message postgres_proto_schema.v1.Partitioning.
 * Use `create(PartitioningSchema)` to create a new message.
 */
export const PartitioningSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 1);

/**
 * Describes the message postgres_proto_schema.v1.RowLevelSecurityPolicy.
 * Use `create(RowLevelSecurityPolicySchema)` to create a new message.
 */
export const RowLevelSecurityPolicySchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 2);

/**
 * Describes the message postgres_proto_schema.v1.Patterns.
 * Use `create(PatternsSchema)` to create a new message.
 */
export const PatternsSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 3);

/**
 * Describes the message postgres_proto_schema.v1.Patterns.Timestamps.
 * Use `create(Patterns_TimestampsSchema)` to create a new message.
 */
export const Patterns_TimestampsSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 3, 0);

/**
 * Describes the message postgres_proto_schema.v1.Patterns.Audit.
 * Use `create(Patterns_AuditSchema)` to create a new message.
 */
export const Patterns_AuditSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 3, 1);

/**
 * Describes the message postgres_proto_schema.v1.TableOptions.
 * Use `create(TableOptionsSchema)` to create a new message.
 */
export const TableOptionsSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 4);

/**
 * Describes the message postgres_proto_schema.v1.Table.
 * Use `create(TableSchema)` to create a new message.
 */
export const TableSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 5);

/**
 * Describes the enum postgres_proto_schema.v1.IndexMethod.
 */
export const IndexMethodSchema = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_table, 0);

/**
 * Table-specific enums
 *
 * @generated from enum postgres_proto_schema.v1.IndexMethod
 */
export const IndexMethod = /*@__PURE__*/
  tsEnum(IndexMethodSchema);

/**
 * Describes the enum postgres_proto_schema.v1.PartitionMethod.
 */
export const PartitionMethodSchema = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_table, 1);

/**
 * @generated from enum postgres_proto_schema.v1.PartitionMethod
 */
export const PartitionMethod = /*@__PURE__*/
  tsEnum(PartitionMethodSchema);

