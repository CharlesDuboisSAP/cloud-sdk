/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
/* eslint-disable valid-jsdoc */

import { EdmType } from './edm-types';
import { serialize } from './serializer';

export function convert(value: any, edmType: EdmType): string {
  const serialized = serialize(value, edmType);
  switch (edmType) {
    case 'Edm.Binary':
      return `X'${serialized}'`;
    case 'Edm.Boolean':
      return String(serialized);
    case 'Edm.Byte':
      return String(serialized);
    case 'Edm.DateTime':
      return `datetime'${value.toISOString().replace(/Z$/, '')}'`;
    case 'Edm.DateTimeOffset':
      return `datetimeoffset'${value.toISOString()}'`;
    case 'Edm.Decimal':
      return `${serialized}M`;
    case 'Edm.Double':
      return isInfOrNan(serialized) ? serialized : `${serialized}D`;
    case 'Edm.Float': // ABAP CDS compatibility
      return isInfOrNan(serialized) ? serialized : `${serialized}F`;
    case 'Edm.Guid':
      return `guid'${serialized}'`;
    case 'Edm.Int16':
      return String(serialized);
    case 'Edm.Int32':
      return String(serialized);
    case 'Edm.SByte':
      return String(serialized);
    case 'Edm.Int64':
      return `${serialized}L`;
    case 'Edm.Single':
      return isInfOrNan(serialized) ? serialized : `${serialized}F`;
    case 'Edm.String':
      return convertString(serialized);
    case 'Edm.Time':
      return `time'${serialized}'`;
    default:
      return serialized;
  }
}

function isInfOrNan(value: string | number): boolean {
  if (typeof value === 'number') {
    return false;
  }
  return ['inf', '-inf', 'nan'].includes(value.toLowerCase());
}

export function convertString(value: any): string {
  return `'${value.replace(/'/g, "''")}'`;
}
