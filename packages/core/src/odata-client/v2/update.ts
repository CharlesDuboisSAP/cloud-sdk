/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import {
  Destination,
  executeHttpRequest,
  HttpRequestConfig,
  removeSlashes
} from '../..';
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

interface UpdateRequest extends ODataRequestParams {
  eTag?: string;
  ignoreETag: boolean;
  method: 'put' | 'patch';
}

export const update = (
  servicePath: string,
  entitySet: string,
  entity: { [key: string]: string },
  request: UpdateRequest = { method: 'put', ignoreETag: false }
) => {
  const updateRequest = (
    k: { [key in keyof Partial<UpdateRequest>]: UpdateRequest[key] }
  ) => update(servicePath, entitySet, entity, { ...request, ...k });
  return {
    eTag: (eTag: string) => updateRequest({ eTag }),
    ignoreETag: () => updateRequest({ ignoreETag: true }),
    method: (method: 'put' | 'patch') => updateRequest({ method }),
    customQuery: (q: { [key: string]: any }) =>
      updateRequest({ customQuery: q }),
    eTagHeader: () => {
      if (request.ignoreETag) {
        return { 'if-match': '*' };
      }
      if (request.eTag) {
        return { 'if-match': request.eTag };
      }
      return {};
    },
    queryParameters: () => request,
    url: (destination: Destination) => {
      let query = Object.entries(
        update(servicePath, entitySet, entity, request).queryParameters()
      )
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      query = query ? `?${query}` : '';
      return `${destination.url}/${removeSlashes(
        servicePath
      )}/${entitySet}${query}`;
    },
    execute: <T extends HttpRequestConfig>(
      destination: Destination,
      requestConfig: Partial<T> = {}
    ) => {
      executeHttpRequest(destination, {
        method: request.method,
        url: update(servicePath, entitySet, entity, request).url(destination),
        data: entity,
        ...requestConfig,
        headers: {
          ...update(servicePath, entitySet, entity, request).eTagHeader(),
          ...requestConfig.headers
        }
      });
    }
  };
};
