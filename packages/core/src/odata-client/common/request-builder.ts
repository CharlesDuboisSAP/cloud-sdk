/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { Destination } from '../../scp-cf';

/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
interface RequestBuilder {
  execute: (destination: Destination) => any;
  url: (destination: Destination) => string;
  queryParameters: () => { [key: string]: string };
}
