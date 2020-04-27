/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { HttpResponse } from '../../http-client';

export interface ETagable {
  ignoreETag: boolean;
  eTag: string;
}

export const parseETag = (response: HttpResponse) =>
  parseETagFromBody(response) || parseETagFromHeader(response);

const getResponseBody = (response: HttpResponse) => response.data.d;

const parseETagFromHeader = (response: HttpResponse): string | undefined =>
  response.headers
    ? response.headers['Etag'] || response.headers['etag']
    : undefined;

const parseETagFromBody = (response: HttpResponse): string | undefined => {
  const body = getResponseBody(response);
  return '__metadata' in body ? body.__metadata.etag : undefined;
};
