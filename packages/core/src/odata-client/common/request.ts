/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { HttpRequestConfig, executeHttpRequest } from '../../http-client';

export interface ODataRequestParams {
  customQuery?: { [key: string]: any };
}

export function execute<RequestT extends HttpRequestConfig>(
  destination,
  request,
  requestConfig: RequestT
) {
  return executeHttpRequest(destination, {
    method: 'get',
    url: request.url(destination),
    ...requestConfig
  });
}
