/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { getAll } from './get-all';

export const v2 = () => ({
  service: (servicePath: string) => ({
    entitySet: (entitySet: string) => ({
      getAll: () => getAll(servicePath, entitySet)
    })
  })
});
