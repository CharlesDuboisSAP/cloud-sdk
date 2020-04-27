/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { Destination } from '../../scp-cf';
import { executeHttpRequest, HttpRequestConfig } from '../../http-client';
import { removeSlashes } from '../../util';
import { ODataRequestParams } from '../common/request';

export const create = (
  servicePath: string,
  entitySet: string,
  entity: { [key: string]: string },
  request: ODataRequestParams = {}
) => {
  const updateRequest = (
    k: { [key in keyof ODataRequestParams]: ODataRequestParams[key] }
  ) => create(servicePath, entitySet, entity, { ...request, ...k });
  return {
    customQuery: (q: { [key: string]: any }) =>
      updateRequest({ customQuery: q }),
    queryParameters: () => request,
    url: (destination: Destination) => {
      let query = Object.entries(
        create(servicePath, entitySet, entity, request).queryParameters()
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
        method: 'post',
        url: create(servicePath, entitySet, entity, request).url(destination),
        data: entity,
        ...requestConfig
      });
    }
  };
};
