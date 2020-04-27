/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { EdmType } from './edm-types';

/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
export function serialize(value: any, edmType: EdmType): any {
  if (value === null) {
    return 'null';
  }
  if (serializers[edmType]) {
    return serializers[edmType](value);
  }
  return value;
}
const identity = val => val;
const toNumber = (value: any): number => Number(value);
const parseNumber = (value: string | number): number => {
  if (typeof value === 'number') {
    return value;
  }

  if (value.toLowerCase() === 'inf') {
    return Number.POSITIVE_INFINITY;
  }
  if (value.toLowerCase() === '-inf') {
    return Number.NEGATIVE_INFINITY;
  }
  if (value.toLowerCase() === 'nan') {
    return Number.NaN;
  }

  const num = Number(value);

  if (Number.isNaN(num)) {
    throw Error(`Cannot create number from input "${value}".`);
  }

  return num;
};

const fromNumber = (value: number): string => {
  if (value === Number.POSITIVE_INFINITY) {
    return 'INF';
  }
  if (value === Number.NEGATIVE_INFINITY) {
    return '-INF';
  }
  if (value === Number.NaN) {
    return 'NaN';
  }

  return value.toString();
};

// Primitivetypes
const serializers = {
  'Edm.Binary': identity, // Not sure
  'Edm.Boolean': identity,
  'Edm.Byte': fromNumber, // Not sure
  'Edm.Date': identity, // 'year "-" month "-" day', // TODO:
  'Edm.DateTimeOffset': identity, // 'year "-" month "-" day "T" hour ":" minute [ ":" second [ "." fractionalSeconds ] ] ( "Z" / SIGN hour ":" minute )' // iso standard TODO:
  'Edm.Decimal': fromNumber,
  'Edm.Double': fromNumber,
  'Edm.Duration': identity, // '[ SIGN ] "P" [ 1*DIGIT "D" ] [ "T" [ 1*DIGIT "H" ] [ 1*DIGIT "M" ] [ 1*DIGIT [ "." 1*DIGIT ] "S" ] ]' // iso standard.  TODO:
  'Edm.Float': fromNumber,
  'Edm.Guid': identity,
  'Edm.Int16': fromNumber,
  'Edm.Int32': fromNumber,
  'Edm.Int64': fromNumber,
  'Edm.SByte': fromNumber,
  'Edm.Single': fromNumber,
  'Edm.Stream': identity,
  'Edm.String': identity,
  'Edm.TimeOfDay': identity // 'hour ":" minute [ ":" second [ "." fractionalSeconds ] ]' // TODO:
  // + Geography + Geometry
};
