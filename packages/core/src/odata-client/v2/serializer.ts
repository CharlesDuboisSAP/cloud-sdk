/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { EdmType } from './edm-types';
import { toEdmDate } from './date-time-util';

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

const serializers = {
  'Edm.Binary': identity,
  'Edm.Boolean': identity,
  'Edm.Byte': fromNumber,
  'Edm.DateTime': toEdmDate,
  'Edm.DateTimeOffset': toEdmDate,
  'Edm.Decimal': fromNumber,
  'Edm.Double': fromNumber,
  'Edm.Float': fromNumber,
  'Edm.Guid': identity,
  'Edm.Int16': fromNumber,
  'Edm.Int32': fromNumber,
  'Edm.Int64': fromNumber,
  'Edm.SByte': fromNumber,
  'Edm.Single': fromNumber,
  'Edm.String': identity,
  'Edm.Time': identity
};
