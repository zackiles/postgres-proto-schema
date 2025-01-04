// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file postgres_proto_schema/v1/common.proto (package postgres_proto_schema.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { FieldConstraints, MessageConstraints, OneofConstraints } from "../../buf/validate/validate_pb";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import type { FieldOptions, MessageOptions, OneofOptions } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file postgres_proto_schema/v1/common.proto.
 */
export const file_postgres_proto_schema_v1_common: GenFile = /*@__PURE__*/
  fileDesc("CiVwb3N0Z3Jlc19wcm90b19zY2hlbWEvdjEvY29tbW9uLnByb3RvEhhwb3N0Z3Jlc19wcm90b19zY2hlbWEudjEiVgoTRm9yZWlnbktleVJlZmVyZW5jZRIeCg1mb3JlaWduX3RhYmxlGAEgASgJQge6SARyAhABEh8KDmZvcmVpZ25fY29sdW1uGAIgASgJQge6SARyAhABIqwBCgpDb25zdHJhaW50EkAKBHR5cGUYASABKA4yKC5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuQ29uc3RyYWludFR5cGVCCLpIBYIBAhABEhgKEGNoZWNrX2V4cHJlc3Npb24YAiABKAkSQgoLZm9yZWlnbl9rZXkYAyABKAsyLS5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuRm9yZWlnbktleVJlZmVyZW5jZSr+BQoIUGxhdGZvcm0SEwoPUExBVEZPUk1fTEFURVNUEAASEAoMUExBVEZPUk1fUkRTEAESEwoPUExBVEZPUk1fQVVST1JBEAISFgoSUExBVEZPUk1fQ0xPVURfU1FMEAMSEgoOUExBVEZPUk1fQVpVUkUQBBIVChFQTEFURk9STV9BUFNBUkFEQhAFEhMKD1BMQVRGT1JNX0hFUk9LVRAGEhkKFVBMQVRGT1JNX0RJR0lUQUxPQ0VBThAHEhUKEVBMQVRGT1JNX0lCTUNMT1VEEAgSGQoVUExBVEZPUk1fQUxJQkFCQUNMT1VEEAkSGAoUUExBVEZPUk1fRUxFUEhBTlRTUUwQChIVChFQTEFURk9STV9TVVBBQkFTRRALEhcKE1BMQVRGT1JNX0NJVFVTQ0xPVUQQDBIWChJQTEFURk9STV9TQ0FMRUdSSUQQDRISCg5QTEFURk9STV9BSVZFThAOEhkKFVBMQVRGT1JNX0VOVEVSUFJJU0VEQhAPEhYKElBMQVRGT1JNX0dSRUVOUExVTRAQEhgKFFBMQVRGT1JNX1RJTUVTQ0FMRURCEBESFQoRUExBVEZPUk1fWVVHQUJZVEUQEhIUChBQTEFURk9STV9DUkFURURCEBMSFwoTUExBVEZPUk1fSFlQRVJTQ0FMRRAUEhAKDFBMQVRGT1JNX0VEQhAVEg8KC1BMQVRGT1JNX1hMEBYSEwoPUExBVEZPUk1fU1RPTE9OEBcSFAoQUExBVEZPUk1fUEFUUk9OSRAYEhYKElBMQVRGT1JNX0NMVVNURVJEQhAZEhgKFFBMQVRGT1JNX1BPU1RHUkVTUFJPEBoSFAoQUExBVEZPUk1fUEVSQ09OQRAbEhYKElBMQVRGT1JNX0JJR0FOSU1BTBAcEhEKDVBMQVRGT1JNX05FT04QHRIUChBQTEFURk9STV9DUlVOQ0hZEB4SDwoLUExBVEZPUk1fMTUQHxIPCgtQTEFURk9STV8xNhAgEg8KC1BMQVRGT1JNXzE3ECEqkQYKBFR5cGUSDQoJVFlQRV9URVhUEAASEAoMVFlQRV9JTlRFR0VSEAESDwoLVFlQRV9CSUdJTlQQAhIQCgxUWVBFX0JPT0xFQU4QAxISCg5UWVBFX1RJTUVTVEFNUBAEEhQKEFRZUEVfVElNRVNUQU1QVFoQBRINCglUWVBFX1VVSUQQBhIOCgpUWVBFX0pTT05CEAcSEAoMVFlQRV9WQVJDSEFSEAgSEAoMVFlQRV9OVU1FUklDEAkSDQoJVFlQRV9EQVRFEAoSDwoLVFlQRV9TRVJJQUwQCxISCg5UWVBFX0JJR1NFUklBTBAMEg0KCVRZUEVfSlNPThANEg8KC1RZUEVfRE9VQkxFEA4SDQoJVFlQRV9SRUFMEA8SDQoJVFlQRV9USU1FEBASEQoNVFlQRV9JTlRFUlZBTBAREg4KClRZUEVfQllURUEQEhINCglUWVBFX0lORVQQExIQCgxUWVBFX0RFQ0lNQUwQFBIRCg1UWVBFX1NNQUxMSU5UEBUSFAoQVFlQRV9TTUFMTFNFUklBTBAWEg0KCVRZUEVfQ0hBUhAXEg4KClRZUEVfTU9ORVkQGBINCglUWVBFX0VOVU0QGRIMCghUWVBFX0JJVBAaEhQKEFRZUEVfQklUX1ZBUllJTkcQGxINCglUWVBFX0NJRFIQHBIQCgxUWVBFX01BQ0FERFIQHRIRCg1UWVBFX1RTVkVDVE9SEB4SEAoMVFlQRV9UU1FVRVJZEB8SEgoOVFlQRV9JTlQ0UkFOR0UQIBISCg5UWVBFX0lOVDhSQU5HRRAhEhEKDVRZUEVfTlVNUkFOR0UQIhIQCgxUWVBFX1RTUkFOR0UQIxISCg5UWVBFX1RTVFpSQU5HRRAkEhIKDlRZUEVfREFURVJBTkdFECUSDgoKVFlQRV9QT0lOVBAmEg0KCVRZUEVfTElORRAnEg0KCVRZUEVfTFNFRxAoEgwKCFRZUEVfQk9YECkSDQoJVFlQRV9QQVRIECoSEAoMVFlQRV9QT0xZR09OECsSDwoLVFlQRV9DSVJDTEUQLCrnAQoOQ29uc3RyYWludFR5cGUSHwobQ09OU1RSQUlOVF9UWVBFX1VOU1BFQ0lGSUVEEAASHwobQ09OU1RSQUlOVF9UWVBFX1BSSU1BUllfS0VZEAESHAoYQ09OU1RSQUlOVF9UWVBFX05PVF9OVUxMEAISGgoWQ09OU1RSQUlOVF9UWVBFX1VOSVFVRRADEhkKFUNPTlNUUkFJTlRfVFlQRV9DSEVDSxAEEh8KG0NPTlNUUkFJTlRfVFlQRV9GT1JFSUdOX0tFWRAFEh0KGUNPTlNUUkFJTlRfVFlQRV9FWENMVVNJT04QBirfAQoRUmVmZXJlbnRpYWxBY3Rpb24SIgoeUkVGRVJFTlRJQUxfQUNUSU9OX1VOU1BFQ0lGSUVEEAASHwobUkVGRVJFTlRJQUxfQUNUSU9OX1JFU1RSSUNUEAESHgoaUkVGRVJFTlRJQUxfQUNUSU9OX0NBU0NBREUQAhIfChtSRUZFUkVOVElBTF9BQ1RJT05fU0VUX05VTEwQAxIiCh5SRUZFUkVOVElBTF9BQ1RJT05fU0VUX0RFRkFVTFQQBBIgChxSRUZFUkVOVElBTF9BQ1RJT05fTk9fQUNUSU9OEAU6VAoFcnVsZXMSHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJIIIAEoCzIeLmJ1Zi52YWxpZGF0ZS5GaWVsZENvbnN0cmFpbnRzUgVydWxlczpUCgVvbmVvZhIdLmdvb2dsZS5wcm90b2J1Zi5PbmVvZk9wdGlvbnMYkgggASgLMh4uYnVmLnZhbGlkYXRlLk9uZW9mQ29uc3RyYWludHNSBW9uZW9mOlwKB21lc3NhZ2USHy5nb29nbGUucHJvdG9idWYuTWVzc2FnZU9wdGlvbnMYkgggASgLMiAuYnVmLnZhbGlkYXRlLk1lc3NhZ2VDb25zdHJhaW50c1IHbWVzc2FnZULbAQocY29tLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MUILQ29tbW9uUHJvdG9QAVo1cG9zdGdyZXMtcHJvdG8tc2NoZW1hL2dlbi9nby9wb3N0Z3Jlcy1wcm90by1zY2hlbWEvdjGiAgNQWFiqAhZQb3N0Z3Jlc1Byb3RvU2NoZW1hLlYxygIWUG9zdGdyZXNQcm90b1NjaGVtYVxWMeICIlBvc3RncmVzUHJvdG9TY2hlbWFcVjFcR1BCTWV0YWRhdGHqAhdQb3N0Z3Jlc1Byb3RvU2NoZW1hOjpWMWIGcHJvdG8z", [file_buf_validate_validate, file_google_protobuf_descriptor]);

/**
 * Shared constraint messages
 *
 * @generated from message postgres_proto_schema.v1.ForeignKeyReference
 */
export type ForeignKeyReference = Message<"postgres_proto_schema.v1.ForeignKeyReference"> & {
  /**
   * @generated from field: string foreign_table = 1;
   */
  foreignTable: string;

  /**
   * @generated from field: string foreign_column = 2;
   */
  foreignColumn: string;
};

/**
 * Describes the message postgres_proto_schema.v1.ForeignKeyReference.
 * Use `create(ForeignKeyReferenceSchema)` to create a new message.
 */
export const ForeignKeyReferenceSchema: GenMessage<ForeignKeyReference> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_common, 0);

/**
 * @generated from message postgres_proto_schema.v1.Constraint
 */
export type Constraint = Message<"postgres_proto_schema.v1.Constraint"> & {
  /**
   * @generated from field: postgres_proto_schema.v1.ConstraintType type = 1;
   */
  type: ConstraintType;

  /**
   * @generated from field: string check_expression = 2;
   */
  checkExpression: string;

  /**
   * @generated from field: postgres_proto_schema.v1.ForeignKeyReference foreign_key = 3;
   */
  foreignKey?: ForeignKeyReference;
};

/**
 * Describes the message postgres_proto_schema.v1.Constraint.
 * Use `create(ConstraintSchema)` to create a new message.
 */
export const ConstraintSchema: GenMessage<Constraint> = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_common, 1);

/**
 * Platform options for PostgreSQL deployments
 *
 * @generated from enum postgres_proto_schema.v1.Platform
 */
export enum Platform {
  /**
   * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
   *
   * Default option, latest PostgreSQL version
   *
   * @generated from enum value: PLATFORM_LATEST = 0;
   */
  PLATFORM_LATEST = 0,

  /**
   * @generated from enum value: PLATFORM_RDS = 1;
   */
  PLATFORM_RDS = 1,

  /**
   * @generated from enum value: PLATFORM_AURORA = 2;
   */
  PLATFORM_AURORA = 2,

  /**
   * @generated from enum value: PLATFORM_CLOUD_SQL = 3;
   */
  PLATFORM_CLOUD_SQL = 3,

  /**
   * @generated from enum value: PLATFORM_AZURE = 4;
   */
  PLATFORM_AZURE = 4,

  /**
   * @generated from enum value: PLATFORM_APSARADB = 5;
   */
  PLATFORM_APSARADB = 5,

  /**
   * @generated from enum value: PLATFORM_HEROKU = 6;
   */
  PLATFORM_HEROKU = 6,

  /**
   * @generated from enum value: PLATFORM_DIGITALOCEAN = 7;
   */
  PLATFORM_DIGITALOCEAN = 7,

  /**
   * @generated from enum value: PLATFORM_IBMCLOUD = 8;
   */
  PLATFORM_IBMCLOUD = 8,

  /**
   * @generated from enum value: PLATFORM_ALIBABACLOUD = 9;
   */
  PLATFORM_ALIBABACLOUD = 9,

  /**
   * @generated from enum value: PLATFORM_ELEPHANTSQL = 10;
   */
  PLATFORM_ELEPHANTSQL = 10,

  /**
   * @generated from enum value: PLATFORM_SUPABASE = 11;
   */
  PLATFORM_SUPABASE = 11,

  /**
   * @generated from enum value: PLATFORM_CITUSCLOUD = 12;
   */
  PLATFORM_CITUSCLOUD = 12,

  /**
   * @generated from enum value: PLATFORM_SCALEGRID = 13;
   */
  PLATFORM_SCALEGRID = 13,

  /**
   * @generated from enum value: PLATFORM_AIVEN = 14;
   */
  PLATFORM_AIVEN = 14,

  /**
   * @generated from enum value: PLATFORM_ENTERPRISEDB = 15;
   */
  PLATFORM_ENTERPRISEDB = 15,

  /**
   * @generated from enum value: PLATFORM_GREENPLUM = 16;
   */
  PLATFORM_GREENPLUM = 16,

  /**
   * @generated from enum value: PLATFORM_TIMESCALEDB = 17;
   */
  PLATFORM_TIMESCALEDB = 17,

  /**
   * @generated from enum value: PLATFORM_YUGABYTE = 18;
   */
  PLATFORM_YUGABYTE = 18,

  /**
   * @generated from enum value: PLATFORM_CRATEDB = 19;
   */
  PLATFORM_CRATEDB = 19,

  /**
   * @generated from enum value: PLATFORM_HYPERSCALE = 20;
   */
  PLATFORM_HYPERSCALE = 20,

  /**
   * @generated from enum value: PLATFORM_EDB = 21;
   */
  PLATFORM_EDB = 21,

  /**
   * @generated from enum value: PLATFORM_XL = 22;
   */
  PLATFORM_XL = 22,

  /**
   * @generated from enum value: PLATFORM_STOLON = 23;
   */
  PLATFORM_STOLON = 23,

  /**
   * @generated from enum value: PLATFORM_PATRONI = 24;
   */
  PLATFORM_PATRONI = 24,

  /**
   * @generated from enum value: PLATFORM_CLUSTERDB = 25;
   */
  PLATFORM_CLUSTERDB = 25,

  /**
   * @generated from enum value: PLATFORM_POSTGRESPRO = 26;
   */
  PLATFORM_POSTGRESPRO = 26,

  /**
   * @generated from enum value: PLATFORM_PERCONA = 27;
   */
  PLATFORM_PERCONA = 27,

  /**
   * @generated from enum value: PLATFORM_BIGANIMAL = 28;
   */
  PLATFORM_BIGANIMAL = 28,

  /**
   * @generated from enum value: PLATFORM_NEON = 29;
   */
  PLATFORM_NEON = 29,

  /**
   * @generated from enum value: PLATFORM_CRUNCHY = 30;
   */
  PLATFORM_CRUNCHY = 30,

  /**
   * @generated from enum value: PLATFORM_15 = 31;
   */
  PLATFORM_15 = 31,

  /**
   * @generated from enum value: PLATFORM_16 = 32;
   */
  PLATFORM_16 = 32,

  /**
   * @generated from enum value: PLATFORM_17 = 33;
   */
  PLATFORM_17 = 33,
}

/**
 * Describes the enum postgres_proto_schema.v1.Platform.
 */
export const PlatformSchema: GenEnum<Platform> = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 0);

/**
 * PostgreSQL column types
 *
 * @generated from enum postgres_proto_schema.v1.Type
 */
export enum Type {
  /**
   * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
   *
   * Default type string
   *
   * @generated from enum value: TYPE_TEXT = 0;
   */
  TEXT = 0,

  /**
   * Standard integer
   *
   * @generated from enum value: TYPE_INTEGER = 1;
   */
  INTEGER = 1,

  /**
   * Large integers, often for IDs
   *
   * @generated from enum value: TYPE_BIGINT = 2;
   */
  BIGINT = 2,

  /**
   * True/false flags
   *
   * @generated from enum value: TYPE_BOOLEAN = 3;
   */
  BOOLEAN = 3,

  /**
   * Date and time
   *
   * @generated from enum value: TYPE_TIMESTAMP = 4;
   */
  TIMESTAMP = 4,

  /**
   * Timezone-aware timestamp
   *
   * @generated from enum value: TYPE_TIMESTAMPTZ = 5;
   */
  TIMESTAMPTZ = 5,

  /**
   * Unique identifiers
   *
   * @generated from enum value: TYPE_UUID = 6;
   */
  UUID = 6,

  /**
   * JSON data (binary, indexed)
   *
   * @generated from enum value: TYPE_JSONB = 7;
   */
  JSONB = 7,

  /**
   * Variable-length strings
   *
   * @generated from enum value: TYPE_VARCHAR = 8;
   */
  VARCHAR = 8,

  /**
   * Precise decimals
   *
   * @generated from enum value: TYPE_NUMERIC = 9;
   */
  NUMERIC = 9,

  /**
   * Moderately used types
   *
   * @generated from enum value: TYPE_DATE = 10;
   */
  DATE = 10,

  /**
   * @generated from enum value: TYPE_SERIAL = 11;
   */
  SERIAL = 11,

  /**
   * @generated from enum value: TYPE_BIGSERIAL = 12;
   */
  BIGSERIAL = 12,

  /**
   * @generated from enum value: TYPE_JSON = 13;
   */
  JSON = 13,

  /**
   * @generated from enum value: TYPE_DOUBLE = 14;
   */
  DOUBLE = 14,

  /**
   * @generated from enum value: TYPE_REAL = 15;
   */
  REAL = 15,

  /**
   * @generated from enum value: TYPE_TIME = 16;
   */
  TIME = 16,

  /**
   * @generated from enum value: TYPE_INTERVAL = 17;
   */
  INTERVAL = 17,

  /**
   * Binary data
   *
   * @generated from enum value: TYPE_BYTEA = 18;
   */
  BYTEA = 18,

  /**
   * IP addresses
   *
   * @generated from enum value: TYPE_INET = 19;
   */
  INET = 19,

  /**
   * Less common types
   *
   * @generated from enum value: TYPE_DECIMAL = 20;
   */
  DECIMAL = 20,

  /**
   * @generated from enum value: TYPE_SMALLINT = 21;
   */
  SMALLINT = 21,

  /**
   * @generated from enum value: TYPE_SMALLSERIAL = 22;
   */
  SMALLSERIAL = 22,

  /**
   * @generated from enum value: TYPE_CHAR = 23;
   */
  CHAR = 23,

  /**
   * @generated from enum value: TYPE_MONEY = 24;
   */
  MONEY = 24,

  /**
   * @generated from enum value: TYPE_ENUM = 25;
   */
  ENUM = 25,

  /**
   * @generated from enum value: TYPE_BIT = 26;
   */
  BIT = 26,

  /**
   * @generated from enum value: TYPE_BIT_VARYING = 27;
   */
  BIT_VARYING = 27,

  /**
   * @generated from enum value: TYPE_CIDR = 28;
   */
  CIDR = 28,

  /**
   * @generated from enum value: TYPE_MACADDR = 29;
   */
  MACADDR = 29,

  /**
   * Specialized types
   *
   * Full text search
   *
   * @generated from enum value: TYPE_TSVECTOR = 30;
   */
  TSVECTOR = 30,

  /**
   * @generated from enum value: TYPE_TSQUERY = 31;
   */
  TSQUERY = 31,

  /**
   * @generated from enum value: TYPE_INT4RANGE = 32;
   */
  INT4RANGE = 32,

  /**
   * @generated from enum value: TYPE_INT8RANGE = 33;
   */
  INT8RANGE = 33,

  /**
   * @generated from enum value: TYPE_NUMRANGE = 34;
   */
  NUMRANGE = 34,

  /**
   * @generated from enum value: TYPE_TSRANGE = 35;
   */
  TSRANGE = 35,

  /**
   * @generated from enum value: TYPE_TSTZRANGE = 36;
   */
  TSTZRANGE = 36,

  /**
   * @generated from enum value: TYPE_DATERANGE = 37;
   */
  DATERANGE = 37,

  /**
   * Geometric types
   *
   * @generated from enum value: TYPE_POINT = 38;
   */
  POINT = 38,

  /**
   * @generated from enum value: TYPE_LINE = 39;
   */
  LINE = 39,

  /**
   * @generated from enum value: TYPE_LSEG = 40;
   */
  LSEG = 40,

  /**
   * @generated from enum value: TYPE_BOX = 41;
   */
  BOX = 41,

  /**
   * @generated from enum value: TYPE_PATH = 42;
   */
  PATH = 42,

  /**
   * @generated from enum value: TYPE_POLYGON = 43;
   */
  POLYGON = 43,

  /**
   * @generated from enum value: TYPE_CIRCLE = 44;
   */
  CIRCLE = 44,
}

/**
 * Describes the enum postgres_proto_schema.v1.Type.
 */
export const TypeSchema: GenEnum<Type> = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 1);

/**
 * @generated from enum postgres_proto_schema.v1.ConstraintType
 */
export enum ConstraintType {
  /**
   * @generated from enum value: CONSTRAINT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CONSTRAINT_TYPE_PRIMARY_KEY = 1;
   */
  PRIMARY_KEY = 1,

  /**
   * @generated from enum value: CONSTRAINT_TYPE_NOT_NULL = 2;
   */
  NOT_NULL = 2,

  /**
   * @generated from enum value: CONSTRAINT_TYPE_UNIQUE = 3;
   */
  UNIQUE = 3,

  /**
   * @generated from enum value: CONSTRAINT_TYPE_CHECK = 4;
   */
  CHECK = 4,

  /**
   * @generated from enum value: CONSTRAINT_TYPE_FOREIGN_KEY = 5;
   */
  FOREIGN_KEY = 5,

  /**
   * @generated from enum value: CONSTRAINT_TYPE_EXCLUSION = 6;
   */
  EXCLUSION = 6,
}

/**
 * Describes the enum postgres_proto_schema.v1.ConstraintType.
 */
export const ConstraintTypeSchema: GenEnum<ConstraintType> = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 2);

/**
 * @generated from enum postgres_proto_schema.v1.ReferentialAction
 */
export enum ReferentialAction {
  /**
   * @generated from enum value: REFERENTIAL_ACTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: REFERENTIAL_ACTION_RESTRICT = 1;
   */
  RESTRICT = 1,

  /**
   * @generated from enum value: REFERENTIAL_ACTION_CASCADE = 2;
   */
  CASCADE = 2,

  /**
   * @generated from enum value: REFERENTIAL_ACTION_SET_NULL = 3;
   */
  SET_NULL = 3,

  /**
   * @generated from enum value: REFERENTIAL_ACTION_SET_DEFAULT = 4;
   */
  SET_DEFAULT = 4,

  /**
   * @generated from enum value: REFERENTIAL_ACTION_NO_ACTION = 5;
   */
  NO_ACTION = 5,
}

/**
 * Describes the enum postgres_proto_schema.v1.ReferentialAction.
 */
export const ReferentialActionSchema: GenEnum<ReferentialAction> = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 3);

/**
 * This is the standard field number for validate rules
 *
 * @generated from extension: buf.validate.FieldConstraints rules = 1042;
 */
export const rules: GenExtension<FieldOptions, FieldConstraints> = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_common, 0);

/**
 * @generated from extension: buf.validate.OneofConstraints oneof = 1042;
 */
export const oneof: GenExtension<OneofOptions, OneofConstraints> = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_common, 1);

/**
 * @generated from extension: buf.validate.MessageConstraints message = 1042;
 */
export const message: GenExtension<MessageOptions, MessageConstraints> = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_common, 2);
