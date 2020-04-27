/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { Destination } from '../../scp-cf';
import { executeHttpRequest, HttpRequestConfig } from '../../http-client';
import { removeSlashes } from '../../util';
import { ODataRequestParams } from '../common/request';

export const prependDollar = (key: string) => `$${key}`;
export const prependDollars = (object: { [key: string]: any }) =>
  Object.entries(object).reduce(
    (newParams, [key, value]) => ({
      ...newParams,
      [prependDollar(key)]: value
    }),
    {}
  );

interface GetByKeyRequest extends ODataRequestParams {
  select?: string;
  expand?: string;
}

export const getByKey = (
  servicePath: string,
  entitySet: string,
  keys: { [key: string]: string },
  request: GetByKeyRequest = {}
) => {
  const updateRequest = (
    k: { [key in keyof GetByKeyRequest]: GetByKeyRequest[key] }
  ) => getByKey(servicePath, entitySet, keys, { ...request, ...k });
  return {
    select: (...selects: string[]) =>
      updateRequest({ select: selects.join(',') }),
    expand: (...expands: string[]) =>
      updateRequest({ expand: expands.join(',') }),
    customQuery: (q: { [key: string]: any }) =>
      updateRequest({ customQuery: q }),
    queryParameters: () => {
      const { customQuery, ...odataQuery } = request;
      return {
        ...prependDollars({ format: 'json', ...odataQuery }),
        ...customQuery
      };
    },
    keyParameters: () =>
      Object.entries(keys)
        .map(([key, value]) => `${key}=${value}`)
        .join(','),
    url: (destination: Destination) => {
      let query = Object.entries(
        getByKey(servicePath, entitySet, keys, request).queryParameters()
      )
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      query = query ? `?${query}` : '';
      let keyParameters = getByKey(
        servicePath,
        entitySet,
        keys,
        request
      ).keyParameters();
      keyParameters = keyParameters ? `(${keyParameters})` : '';
      return `${destination.url}/${removeSlashes(
        servicePath
      )}/${entitySet}${keyParameters}${query}`;
    },
    execute: <T extends HttpRequestConfig>(
      destination: Destination,
      requestConfig: Partial<T> = {}
    ) => {
      executeHttpRequest(destination, {
        method: 'get',
        url: getByKey(servicePath, entitySet, keys, request).url(destination),
        ...requestConfig
      });
    }
  };
};
