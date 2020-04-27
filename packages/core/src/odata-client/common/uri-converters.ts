/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
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
