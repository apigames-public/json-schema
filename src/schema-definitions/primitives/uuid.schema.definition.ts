import { Schema } from 'jsonschema';
import { IJsonSchemaDefinition } from '../../index';

// eslint-disable-next-line max-len
const regex = /^[{]{0,1}[0-9a-fA-F]{8}[-]{0,1}[0-9a-fA-F]{4}[-]{0,1}[0-9a-fA-F]{4}[-]{0,1}[0-9a-fA-F]{4}[-]{0,1}[0-9a-fA-F]{12}[}]{0,1}$/;

const UuidSchemaDefinition: IJsonSchemaDefinition = class {
    static SchemaName = (context: any): string => '/core.uuid.schema';

    static SchemaDefinition(context: any): Schema {
      return {
        $schema: 'http://json-document-schemas.org/draft-06/document-schemas#',
        id: UuidSchemaDefinition.SchemaName(context),
        title: 'Schema for a UUID',
        description: 'Schema for use in the validation of a UUID',
        type: 'string',
        minLength: 32,
        maxLength: 38,
        pattern: regex,
      };
    }
};

export default UuidSchemaDefinition;
