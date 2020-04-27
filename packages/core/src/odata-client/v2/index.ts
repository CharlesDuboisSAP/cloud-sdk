/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { getAll } from './get-all';
import { getByKey } from './get-by-key';
import { create } from './create';
import { update } from './update';

export const v2 = () => ({
  service: (servicePath: string) => ({
    entitySet: (entitySet: string) => ({
      getAll: () => getAll(servicePath, entitySet),
      getByKey: (keys: { [key: string]: string }) =>
        getByKey(servicePath, entitySet, keys),
      create: (entity: { [key: string]: string }) =>
        create(servicePath, entitySet, entity),
      update: (entity: { [key: string]: string }) =>
        update(servicePath, entitySet, entity)
    })
  })
});
