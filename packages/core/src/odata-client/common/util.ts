/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
export const prependDollar = (key: string) => `$${key}`;
export const prependDollars = (object: { [key: string]: any }) =>
  Object.entries(object).reduce(
    (newParams, [key, value]) => ({
      ...newParams,
      [prependDollar(key)]: value
    }),
    {}
  );
