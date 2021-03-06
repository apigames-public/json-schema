export { Schema as JsonSchema, ValidationError as JsonSchemaValidationError } from 'jsonschema';

export { IJsonSchemaDefinition, JsonSchemaValidator, SetupSchemaDependenciesFunction } from './validator';

export {
  DatetimeSchemaDefinition,
  EmailAddressSchemaDefinition,
  GeolocationPointSchemaDefinition,
  IpAddressSchemaDefinition,
  MongoDBObjectIdSchemaDefinition,
  UrlSchemaDefinition,
  UuidSchemaDefinition,
} from './schema-definitions';
