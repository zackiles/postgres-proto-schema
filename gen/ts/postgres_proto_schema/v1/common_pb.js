// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+dts+js,import_extension=none,json_types=true,ts_nocheck=true"
// @generated from file postgres_proto_schema/v1/common.proto (package postgres_proto_schema.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { enumDesc, extDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import { file_google_protobuf_descriptor } from "../../google/protobuf/descriptor_pb";

/**
 * Describes the file postgres_proto_schema/v1/common.proto.
 */
export const file_postgres_proto_schema_v1_common = /*@__PURE__*/
  fileDesc("CiVwb3N0Z3Jlc19wcm90b19zY2hlbWEvdjEvY29tbW9uLnByb3RvEhhwb3N0Z3Jlc19wcm90b19zY2hlbWEudjEiVgoTRm9yZWlnbktleVJlZmVyZW5jZRIeCg1mb3JlaWduX3RhYmxlGAEgASgJQge6SARyAhABEh8KDmZvcmVpZ25fY29sdW1uGAIgASgJQge6SARyAhABIqwBCgpDb25zdHJhaW50EkAKBHR5cGUYASABKA4yKC5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuQ29uc3RyYWludFR5cGVCCLpIBYIBAhABEhgKEGNoZWNrX2V4cHJlc3Npb24YAiABKAkSQgoLZm9yZWlnbl9rZXkYAyABKAsyLS5wb3N0Z3Jlc19wcm90b19zY2hlbWEudjEuRm9yZWlnbktleVJlZmVyZW5jZSr+BQoIUGxhdGZvcm0SEwoPUExBVEZPUk1fTEFURVNUEAASEAoMUExBVEZPUk1fUkRTEAESEwoPUExBVEZPUk1fQVVST1JBEAISFgoSUExBVEZPUk1fQ0xPVURfU1FMEAMSEgoOUExBVEZPUk1fQVpVUkUQBBIVChFQTEFURk9STV9BUFNBUkFEQhAFEhMKD1BMQVRGT1JNX0hFUk9LVRAGEhkKFVBMQVRGT1JNX0RJR0lUQUxPQ0VBThAHEhUKEVBMQVRGT1JNX0lCTUNMT1VEEAgSGQoVUExBVEZPUk1fQUxJQkFCQUNMT1VEEAkSGAoUUExBVEZPUk1fRUxFUEhBTlRTUUwQChIVChFQTEFURk9STV9TVVBBQkFTRRALEhcKE1BMQVRGT1JNX0NJVFVTQ0xPVUQQDBIWChJQTEFURk9STV9TQ0FMRUdSSUQQDRISCg5QTEFURk9STV9BSVZFThAOEhkKFVBMQVRGT1JNX0VOVEVSUFJJU0VEQhAPEhYKElBMQVRGT1JNX0dSRUVOUExVTRAQEhgKFFBMQVRGT1JNX1RJTUVTQ0FMRURCEBESFQoRUExBVEZPUk1fWVVHQUJZVEUQEhIUChBQTEFURk9STV9DUkFURURCEBMSFwoTUExBVEZPUk1fSFlQRVJTQ0FMRRAUEhAKDFBMQVRGT1JNX0VEQhAVEg8KC1BMQVRGT1JNX1hMEBYSEwoPUExBVEZPUk1fU1RPTE9OEBcSFAoQUExBVEZPUk1fUEFUUk9OSRAYEhYKElBMQVRGT1JNX0NMVVNURVJEQhAZEhgKFFBMQVRGT1JNX1BPU1RHUkVTUFJPEBoSFAoQUExBVEZPUk1fUEVSQ09OQRAbEhYKElBMQVRGT1JNX0JJR0FOSU1BTBAcEhEKDVBMQVRGT1JNX05FT04QHRIUChBQTEFURk9STV9DUlVOQ0hZEB4SDwoLUExBVEZPUk1fMTUQHxIPCgtQTEFURk9STV8xNhAgEg8KC1BMQVRGT1JNXzE3ECEqkQYKBFR5cGUSDQoJVFlQRV9URVhUEAASEAoMVFlQRV9JTlRFR0VSEAESDwoLVFlQRV9CSUdJTlQQAhIQCgxUWVBFX0JPT0xFQU4QAxISCg5UWVBFX1RJTUVTVEFNUBAEEhQKEFRZUEVfVElNRVNUQU1QVFoQBRINCglUWVBFX1VVSUQQBhIOCgpUWVBFX0pTT05CEAcSEAoMVFlQRV9WQVJDSEFSEAgSEAoMVFlQRV9OVU1FUklDEAkSDQoJVFlQRV9EQVRFEAoSDwoLVFlQRV9TRVJJQUwQCxISCg5UWVBFX0JJR1NFUklBTBAMEg0KCVRZUEVfSlNPThANEg8KC1RZUEVfRE9VQkxFEA4SDQoJVFlQRV9SRUFMEA8SDQoJVFlQRV9USU1FEBASEQoNVFlQRV9JTlRFUlZBTBAREg4KClRZUEVfQllURUEQEhINCglUWVBFX0lORVQQExIQCgxUWVBFX0RFQ0lNQUwQFBIRCg1UWVBFX1NNQUxMSU5UEBUSFAoQVFlQRV9TTUFMTFNFUklBTBAWEg0KCVRZUEVfQ0hBUhAXEg4KClRZUEVfTU9ORVkQGBINCglUWVBFX0VOVU0QGRIMCghUWVBFX0JJVBAaEhQKEFRZUEVfQklUX1ZBUllJTkcQGxINCglUWVBFX0NJRFIQHBIQCgxUWVBFX01BQ0FERFIQHRIRCg1UWVBFX1RTVkVDVE9SEB4SEAoMVFlQRV9UU1FVRVJZEB8SEgoOVFlQRV9JTlQ0UkFOR0UQIBISCg5UWVBFX0lOVDhSQU5HRRAhEhEKDVRZUEVfTlVNUkFOR0UQIhIQCgxUWVBFX1RTUkFOR0UQIxISCg5UWVBFX1RTVFpSQU5HRRAkEhIKDlRZUEVfREFURVJBTkdFECUSDgoKVFlQRV9QT0lOVBAmEg0KCVRZUEVfTElORRAnEg0KCVRZUEVfTFNFRxAoEgwKCFRZUEVfQk9YECkSDQoJVFlQRV9QQVRIECoSEAoMVFlQRV9QT0xZR09OECsSDwoLVFlQRV9DSVJDTEUQLCrnAQoOQ29uc3RyYWludFR5cGUSHwobQ09OU1RSQUlOVF9UWVBFX1VOU1BFQ0lGSUVEEAASHwobQ09OU1RSQUlOVF9UWVBFX1BSSU1BUllfS0VZEAESHAoYQ09OU1RSQUlOVF9UWVBFX05PVF9OVUxMEAISGgoWQ09OU1RSQUlOVF9UWVBFX1VOSVFVRRADEhkKFUNPTlNUUkFJTlRfVFlQRV9DSEVDSxAEEh8KG0NPTlNUUkFJTlRfVFlQRV9GT1JFSUdOX0tFWRAFEh0KGUNPTlNUUkFJTlRfVFlQRV9FWENMVVNJT04QBirfAQoRUmVmZXJlbnRpYWxBY3Rpb24SIgoeUkVGRVJFTlRJQUxfQUNUSU9OX1VOU1BFQ0lGSUVEEAASHwobUkVGRVJFTlRJQUxfQUNUSU9OX1JFU1RSSUNUEAESHgoaUkVGRVJFTlRJQUxfQUNUSU9OX0NBU0NBREUQAhIfChtSRUZFUkVOVElBTF9BQ1RJT05fU0VUX05VTEwQAxIiCh5SRUZFUkVOVElBTF9BQ1RJT05fU0VUX0RFRkFVTFQQBBIgChxSRUZFUkVOVElBTF9BQ1RJT05fTk9fQUNUSU9OEAU6VAoFcnVsZXMSHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJIIIAEoCzIeLmJ1Zi52YWxpZGF0ZS5GaWVsZENvbnN0cmFpbnRzUgVydWxlczpUCgVvbmVvZhIdLmdvb2dsZS5wcm90b2J1Zi5PbmVvZk9wdGlvbnMYkgggASgLMh4uYnVmLnZhbGlkYXRlLk9uZW9mQ29uc3RyYWludHNSBW9uZW9mOlwKB21lc3NhZ2USHy5nb29nbGUucHJvdG9idWYuTWVzc2FnZU9wdGlvbnMYkgggASgLMiAuYnVmLnZhbGlkYXRlLk1lc3NhZ2VDb25zdHJhaW50c1IHbWVzc2FnZUK+AQocY29tLnBvc3RncmVzX3Byb3RvX3NjaGVtYS52MUILQ29tbW9uUHJvdG9QAVoYcG9zdGdyZXNfcHJvdG9fc2NoZW1hL3YxogIDUFhYqgIWUG9zdGdyZXNQcm90b1NjaGVtYS5WMcoCFlBvc3RncmVzUHJvdG9TY2hlbWFcVjHiAiJQb3N0Z3Jlc1Byb3RvU2NoZW1hXFYxXEdQQk1ldGFkYXRh6gIXUG9zdGdyZXNQcm90b1NjaGVtYTo6VjFiBnByb3RvMw", [file_buf_validate_validate, file_google_protobuf_descriptor]);

/**
 * Describes the message postgres_proto_schema.v1.ForeignKeyReference.
 * Use `create(ForeignKeyReferenceSchema)` to create a new message.
 */
export const ForeignKeyReferenceSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_common, 0);

/**
 * Describes the message postgres_proto_schema.v1.Constraint.
 * Use `create(ConstraintSchema)` to create a new message.
 */
export const ConstraintSchema = /*@__PURE__*/
  messageDesc(file_postgres_proto_schema_v1_common, 1);

/**
 * Describes the enum postgres_proto_schema.v1.Platform.
 */
export const PlatformSchema = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 0);

/**
 * Platform options for PostgreSQL deployments
 *
 * @generated from enum postgres_proto_schema.v1.Platform
 */
export const Platform = /*@__PURE__*/
  tsEnum(PlatformSchema);

/**
 * Describes the enum postgres_proto_schema.v1.Type.
 */
export const TypeSchema = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 1);

/**
 * PostgreSQL column types
 *
 * @generated from enum postgres_proto_schema.v1.Type
 */
export const Type = /*@__PURE__*/
  tsEnum(TypeSchema);

/**
 * Describes the enum postgres_proto_schema.v1.ConstraintType.
 */
export const ConstraintTypeSchema = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 2);

/**
 * @generated from enum postgres_proto_schema.v1.ConstraintType
 */
export const ConstraintType = /*@__PURE__*/
  tsEnum(ConstraintTypeSchema);

/**
 * Describes the enum postgres_proto_schema.v1.ReferentialAction.
 */
export const ReferentialActionSchema = /*@__PURE__*/
  enumDesc(file_postgres_proto_schema_v1_common, 3);

/**
 * @generated from enum postgres_proto_schema.v1.ReferentialAction
 */
export const ReferentialAction = /*@__PURE__*/
  tsEnum(ReferentialActionSchema);

/**
 * This is the standard field number for validate rules
 *
 * @generated from extension: buf.validate.FieldConstraints rules = 1042;
 */
export const rules = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_common, 0);

/**
 * @generated from extension: buf.validate.OneofConstraints oneof = 1042;
 */
export const oneof = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_common, 1);

/**
 * @generated from extension: buf.validate.MessageConstraints message = 1042;
 */
export const message = /*@__PURE__*/
  extDesc(file_postgres_proto_schema_v1_common, 2);
