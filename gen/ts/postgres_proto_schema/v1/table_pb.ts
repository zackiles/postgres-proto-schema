// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file postgres_proto_schema/v1/table.proto (package postgres_proto_schema.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";
import type { Column } from "./column_pb";
import { file_postgres_proto_schema_v1_column } from "./column_pb";
import type { Constraint, Platform } from "./common_pb";
import { file_postgres_proto_schema_v1_common } from "./common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file postgres_proto_schema/v1/table.proto.
 */
export const file_postgres_proto_schema_v1_table: GenFile = /*@__PURE__*/
  fileDesc("CiRwb3N0Z3Jlc19wcm90b19zY2hlbWEvdjEvdGFibGUucHJvdG8SGHBvc3RncmVzX3Byb3RvX3NjaGVtYS52MSL6AQoPSW5kZXhEZWZpbml0aW9uEjEKBG5hbWUYASABKAlCI7pIIHIeEAEYPzIYXlthLXpBLVpfXVthLXpBLVowLTlfXSokEh8KB2NvbHVtbnMYAiADKAlCDrpIC5IBCAgBIgRyAhABEhwKCmV4cHJlc3Npb24YAyABKAlCCLpIBXIDGP8BEkUKDGluZGV4X21ldGhvZBgEIAEoDjIlLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MS5JbmRleE1ldGhvZEIIukgFggECEAESDgoGdW5pcXVlGAUgASgIEh4KDHdoZXJlX2NsYXVzZRgGIAEoCUIIukgFcgMY/wEiawoMUGFydGl0aW9uaW5nEkMKBm1ldGhvZBgBIAEoDjIpLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MS5QYXJ0aXRpb25NZXRob2RCCLpIBYIBAhABEhYKBGtleXMYAiADKAlCCLpIBZIBAggBIpIBChZSb3dMZXZlbFNlY3VyaXR5UG9saWN5EhUKBG5hbWUYASABKAlCB7pIBHICEAESIQoQdXNpbmdfZXhwcmVzc2lvbhgCIAEoCUIHukgEcgIQARInChV3aXRoX2NoZWNrX2V4cHJlc3Npb24YAyABKAlCCLpIBXIDGP8BEhUKBHJvbGUYBCABKAlCB7pIBHICEAEiqgEKCFBhdHRlcm5zGlEKClRpbWVzdGFtcHMSFQoNdHJhY2tfY3JlYXRlZBgBIAEoCBIVCg10cmFja191cGRhdGVkGAIgASgIEhUKDXRyYWNrX2RlbGV0ZWQYAyABKAgaSwoFQXVkaXQSFQoNdHJhY2tfY3JlYXRvchgBIAEoCBIVCg10cmFja191cGRhdGVyGAIgASgIEhQKDGF1ZGl0X3NjaGVtYRgDIAEoCSLuBQoMVGFibGVPcHRpb25zEhsKCnRhYmxlX25hbWUYASABKAlCB7pIBHICEAESFwoGc2NoZW1hGAIgASgJQge6SARyAhABEhsKCnRhYmxlc3BhY2UYAyABKAlCB7pIBHICEAESEwoLaXNfdW5sb2dnZWQYBCABKAgSFAoMaXNfdGVtcG9yYXJ5GAUgASgIEjoKB2luZGV4ZXMYBiADKAsyKS5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuSW5kZXhEZWZpbml0aW9uEj8KEXRhYmxlX2NvbnN0cmFpbnRzGAcgAygLMiQucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLkNvbnN0cmFpbnQSWQoSc3RvcmFnZV9wYXJhbWV0ZXJzGAggAygLMj0ucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLlRhYmxlT3B0aW9ucy5TdG9yYWdlUGFyYW1ldGVyc0VudHJ5EjwKDHBhcnRpdGlvbmluZxgJIAEoCzImLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MS5QYXJ0aXRpb25pbmcSRgoMcmxzX3BvbGljaWVzGAogAygLMjAucG9zdGdyZXNfcHJvdG9fc2NoZW1hLnYxLlJvd0xldmVsU2VjdXJpdHlQb2xpY3kSGgoJY29sbGF0aW9uGAwgASgJQge6SARyAhABEhgKB3N0b3JhZ2UYDSABKAlCB7pIBHICEAESHAoLY29tcHJlc3Npb24YDiABKAlCB7pIBHICEAESIgoRc3RhdGlzdGljc190YXJnZXQYDyABKAVCB7pIBBoCIAASSQoRZGVwbG95bWVudF9vcHRpb24YECABKA4yIi5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuUGxhdGZvcm1CCrpIB4IBBBABGCIaOAoWU3RvcmFnZVBhcmFtZXRlcnNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBSgUIZBDIASJbCgVUYWJsZRIVCgRuYW1lGAEgASgJQge6SARyAhABEjsKB2NvbHVtbnMYAiADKAsyIC5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuQ29sdW1uQgi6SAWSAQIIASq3AQoLSW5kZXhNZXRob2QSHAoYSU5ERVhfTUVUSE9EX1VOU1BFQ0lGSUVEEAASFgoSSU5ERVhfTUVUSE9EX0JUUkVFEAESFQoRSU5ERVhfTUVUSE9EX0hBU0gQAhIVChFJTkRFWF9NRVRIT0RfR0lTVBADEhcKE0lOREVYX01FVEhPRF9TUEdJU1QQBBIUChBJTkRFWF9NRVRIT0RfR0lOEAUSFQoRSU5ERVhfTUVUSE9EX0JSSU4QBiqFAQoPUGFydGl0aW9uTWV0aG9kEiAKHFBBUlRJVElPTl9NRVRIT0RfVU5TUEVDSUZJRUQQABIaChZQQVJUSVRJT05fTUVUSE9EX1JBTkdFEAESGQoVUEFSVElUSU9OX01FVEhPRF9IQVNIEAISGQoVUEFSVElUSU9OX01FVEhPRF9MSVNUEANC2gEKHGNvbS5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjFCClRhYmxlUHJvdG9QAVo1cG9zdGdyZXMtcHJvdG8tc2NoZW1hL2dlbi9nby9wb3N0Z3Jlcy1wcm90by1zY2hlbWEvdjGiAgNQWFiqAhZQb3N0Z3Jlc1Byb3RvU2NoZW1hLlYxygIWUG9zdGdyZXNQcm90b1NjaGVtYVxWMeICIlBvc3RncmVzUHJvdG9TY2hlbWFcVjFcR1BCTWV0YWRhdGHqAhdQb3N0Z3Jlc1Byb3RvU2NoZW1hOjpWMWIGcHJvdG8z", [file_buf_validate_validate, file_google_protobuf_descriptor, file_postgres_proto_schema_v1_column, file_postgres_proto_schema_v1_common]);

/**
 * Table-specific messages
 *
 * @generated from message postgres_proto_schema.v1.IndexDefinition
 */
export type IndexDefinition = Message<"postgres_proto_schema.v1.IndexDefinition"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated string columns = 2;
   */
  columns: string[];

  /**
   * @generated from field: string expression = 3;
   */
  expression: string;

  /**
   * @generated from field: postgres_proto_schema.v1.IndexMethod index_method = 4;
   */
  indexMethod: IndexMethod;

  /**
   * @generated from field: bool unique = 5;
   */
  unique: boolean;

  /**
   * @generated from field: string where_clause = 6;
   */
  whereClause: string;
};

/**
 * Describes the message postgres_proto_schema.v1.IndexDefinition.
 * Use `create(IndexDefinitionSchema)` to create a new message.
 */
export const IndexDefinitionSchema: GenMessage<IndexDefinition> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 0);

/**
 * @generated from message postgres_proto_schema.v1.Partitioning
 */
export type Partitioning = Message<"postgres_proto_schema.v1.Partitioning"> & {
  /**
   * @generated from field: postgres_proto_schema.v1.PartitionMethod method = 1;
   */
  method: PartitionMethod;

  /**
   * @generated from field: repeated string keys = 2;
   */
  keys: string[];
};

/**
 * Describes the message postgres_proto_schema.v1.Partitioning.
 * Use `create(PartitioningSchema)` to create a new message.
 */
export const PartitioningSchema: GenMessage<Partitioning> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 1);

/**
 * @generated from message postgres_proto_schema.v1.RowLevelSecurityPolicy
 */
export type RowLevelSecurityPolicy = Message<"postgres_proto_schema.v1.RowLevelSecurityPolicy"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string using_expression = 2;
   */
  usingExpression: string;

  /**
   * @generated from field: string with_check_expression = 3;
   */
  withCheckExpression: string;

  /**
   * @generated from field: string role = 4;
   */
  role: string;
};

/**
 * Describes the message postgres_proto_schema.v1.RowLevelSecurityPolicy.
 * Use `create(RowLevelSecurityPolicySchema)` to create a new message.
 */
export const RowLevelSecurityPolicySchema: GenMessage<RowLevelSecurityPolicy> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 2);

/**
 * Patterns for table generation
 *
 * @generated from message postgres_proto_schema.v1.Patterns
 */
export type Patterns = Message<"postgres_proto_schema.v1.Patterns"> & {
};

/**
 * Describes the message postgres_proto_schema.v1.Patterns.
 * Use `create(PatternsSchema)` to create a new message.
 */
export const PatternsSchema: GenMessage<Patterns> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 3);

/**
 * @generated from message postgres_proto_schema.v1.Patterns.Timestamps
 */
export type Patterns_Timestamps = Message<"postgres_proto_schema.v1.Patterns.Timestamps"> & {
  /**
   * @generated from field: bool track_created = 1;
   */
  trackCreated: boolean;

  /**
   * @generated from field: bool track_updated = 2;
   */
  trackUpdated: boolean;

  /**
   * @generated from field: bool track_deleted = 3;
   */
  trackDeleted: boolean;
};

/**
 * Describes the message postgres_proto_schema.v1.Patterns.Timestamps.
 * Use `create(Patterns_TimestampsSchema)` to create a new message.
 */
export const Patterns_TimestampsSchema: GenMessage<Patterns_Timestamps> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 3, 0);

/**
 * @generated from message postgres_proto_schema.v1.Patterns.Audit
 */
export type Patterns_Audit = Message<"postgres_proto_schema.v1.Patterns.Audit"> & {
  /**
   * @generated from field: bool track_creator = 1;
   */
  trackCreator: boolean;

  /**
   * @generated from field: bool track_updater = 2;
   */
  trackUpdater: boolean;

  /**
   * @generated from field: string audit_schema = 3;
   */
  auditSchema: string;
};

/**
 * Describes the message postgres_proto_schema.v1.Patterns.Audit.
 * Use `create(Patterns_AuditSchema)` to create a new message.
 */
export const Patterns_AuditSchema: GenMessage<Patterns_Audit> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 3, 1);

/**
 * Table options
 *
 * @generated from message postgres_proto_schema.v1.TableOptions
 */
export type TableOptions = Message<"postgres_proto_schema.v1.TableOptions"> & {
  /**
   * @generated from field: string table_name = 1;
   */
  tableName: string;

  /**
   * @generated from field: string schema = 2;
   */
  schema: string;

  /**
   * @generated from field: string tablespace = 3;
   */
  tablespace: string;

  /**
   * @generated from field: bool is_unlogged = 4;
   */
  isUnlogged: boolean;

  /**
   * @generated from field: bool is_temporary = 5;
   */
  isTemporary: boolean;

  /**
   * @generated from field: repeated postgres_proto_schema.v1.IndexDefinition indexes = 6;
   */
  indexes: IndexDefinition[];

  /**
   * @generated from field: repeated postgres_proto_schema.v1.Constraint table_constraints = 7;
   */
  tableConstraints: Constraint[];

  /**
   * @generated from field: map<string, string> storage_parameters = 8;
   */
  storageParameters: { [key: string]: string };

  /**
   * @generated from field: postgres_proto_schema.v1.Partitioning partitioning = 9;
   */
  partitioning?: Partitioning;

  /**
   * @generated from field: repeated postgres_proto_schema.v1.RowLevelSecurityPolicy rls_policies = 10;
   */
  rlsPolicies: RowLevelSecurityPolicy[];

  /**
   * @generated from field: string collation = 12;
   */
  collation: string;

  /**
   * @generated from field: string storage = 13;
   */
  storage: string;

  /**
   * @generated from field: string compression = 14;
   */
  compression: string;

  /**
   * @generated from field: int32 statistics_target = 15;
   */
  statisticsTarget: number;

  /**
   * @generated from field: postgres_proto_schema.v1.Platform deployment_option = 16;
   */
  deploymentOption: Platform;
};

/**
 * Describes the message postgres_proto_schema.v1.TableOptions.
 * Use `create(TableOptionsSchema)` to create a new message.
 */
export const TableOptionsSchema: GenMessage<TableOptions> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 4);

/**
 * Table definition
 *
 * @generated from message postgres_proto_schema.v1.Table
 */
export type Table = Message<"postgres_proto_schema.v1.Table"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated postgres_proto_schema.v1.Column columns = 2;
   */
  columns: Column[];
};

/**
 * Describes the message postgres_proto_schema.v1.Table.
 * Use `create(TableSchema)` to create a new message.
 */
export const TableSchema: GenMessage<Table> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_table, 5);

/**
 * Table-specific enums
 *
 * @generated from enum postgres_proto_schema.v1.IndexMethod
 */
export enum IndexMethod {
  /**
   * @generated from enum value: INDEX_METHOD_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: INDEX_METHOD_BTREE = 1;
   */
  BTREE = 1,

  /**
   * @generated from enum value: INDEX_METHOD_HASH = 2;
   */
  HASH = 2,

  /**
   * @generated from enum value: INDEX_METHOD_GIST = 3;
   */
  GIST = 3,

  /**
   * @generated from enum value: INDEX_METHOD_SPGIST = 4;
   */
  SPGIST = 4,

  /**
   * @generated from enum value: INDEX_METHOD_GIN = 5;
   */
  GIN = 5,

  /**
   * @generated from enum value: INDEX_METHOD_BRIN = 6;
   */
  BRIN = 6,
}

/**
 * Describes the enum postgres_proto_schema.v1.IndexMethod.
 */
export const IndexMethodSchema: GenEnum<IndexMethod> = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_table, 0);

/**
 * @generated from enum postgres_proto_schema.v1.PartitionMethod
 */
export enum PartitionMethod {
  /**
   * @generated from enum value: PARTITION_METHOD_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PARTITION_METHOD_RANGE = 1;
   */
  RANGE = 1,

  /**
   * @generated from enum value: PARTITION_METHOD_HASH = 2;
   */
  HASH = 2,

  /**
   * @generated from enum value: PARTITION_METHOD_LIST = 3;
   */
  LIST = 3,
}

/**
 * Describes the enum postgres_proto_schema.v1.PartitionMethod.
 */
export const PartitionMethodSchema: GenEnum<PartitionMethod> = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_table, 1);

