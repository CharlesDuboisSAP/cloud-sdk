/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { executeHttpRequest, HttpRequestConfig } from '../../http-client';
import { Destination } from '../../scp-cf';
import { removeSlashes } from '../../util';
import { prependDollars } from '../common/util';
import { ODataRequestParams } from '../common/request';

interface GetAllRequest extends ODataRequestParams {
  select?: string;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
}

export const getAll = (
  servicePath: string,
  entitySet: string,
  request: GetAllRequest = {}
) => {
  const updateRequest = (
    k: { [key in keyof GetAllRequest]: GetAllRequest[key] }
  ) => getAll(servicePath, entitySet, { ...request, ...k });
  return {
    select: (...selects: string[]) =>
      updateRequest({ select: selects.join(',') }),
    expand: (...expands: string[]) =>
      updateRequest({ expand: expands.join(',') }),
    filter: (...filterExpressions: string[]) =>
      updateRequest({ filter: and(...filterExpressions) }),
    orderBy: (...orderExpressions: string[]) =>
      updateRequest({ orderBy: orderExpressions.join(',') }),
    top: (top: number) => updateRequest({ top }),
    skip: (skip: number) => updateRequest({ skip }),
    customQuery: (q: { [key: string]: any }) =>
      updateRequest({ customQuery: q }),
    queryParameters: () => {
      const { customQuery, ...odataQuery } = request;
      return {
        ...prependDollars({ format: 'json', ...odataQuery }),
        ...customQuery
      };
    },
    url: (destination: Destination) => {
      let query = Object.entries(
        getAll(servicePath, entitySet, request).queryParameters()
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
    ) =>
      executeHttpRequest(destination, {
        method: 'get',
        url: getAll(servicePath, entitySet, request).url(destination),
        ...requestConfig
      })
  };
};

export function filterExpression(
  property: string,
  operand: string,
  value: string
) {
  return `${property} ${operand} ${value}`;
}

function operandBasedFilterExpression(operand: string) {
  return (property: string, value: string) =>
    filterExpression(property, operand, value);
}

export const equals = operandBasedFilterExpression('eq');
export const notEquals = operandBasedFilterExpression('eq');
export const greaterThan = operandBasedFilterExpression('gt');
export const greaterOrEqual = operandBasedFilterExpression('ge');
export const lessThan = operandBasedFilterExpression('lt');
export const lessOrEqual = operandBasedFilterExpression('le');

export function and(...filterExpressions: string[]): string {
  return filterExpressions.map(filter => `(${filter})`).join(' and ');
}

export function or(...filterExpressions: string[]): string {
  return filterExpressions.map(filter => `(${filter})`).join(' or ');
}

export function filterFunction(
  functionName: string,
  ...parameters: string[]
): string {
  return `${functionName}(${parameters.join(',')})`;
}

export function substring(p0: string, pos: string): string {
  return filterFunction('substring', p0, pos);
}

export function day(p0: string): string {
  return filterFunction('dat', p0);
}

export function orderExpression(
  property: string,
  order: 'asc' | 'desc' = 'asc'
): string {
  return `${property} ${order}`;
}

export function asc(property: string): string {
  return orderExpression(property, 'asc');
}

export function desc(property: string): string {
  return orderExpression(property, 'desc');
}
