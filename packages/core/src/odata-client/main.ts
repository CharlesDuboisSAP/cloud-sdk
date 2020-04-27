/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
/* eslint-disable no-console */
import { v2 } from './v2';
import { v4 } from './v4';

// V2 GETALL
const getAllRequest = v2()
  .service('sap/opu/odata/sap/API_BUSINESS_PARTNER')
  .entitySet('A_BusinessPartner')
  .getAll()
  .select(
    'BusinessPartner',
    'FirstName',
    'LastName',
    'to_BusinessPartnerAddress'
  )
  .expand('to_BusinessPartnerAddress')
  .filter(
    and(
      equals('a', convert('test', 'Edm.String')),
      notEquals('b', "'test'"),
      or(lessThan('c', '2'))
    ),
    greaterOrEqual('d', '12'),
    equals(substring('a', '4'), "'test'")
  )
  .orderBy('z')
  .customQuery({ addition: 'test4' })
  .top(2);

const destination = {
  url: 'https://sandbox.api.sap.com/s4hanacloud'
};

console.log(getAllRequest.url(destination));

getAllRequest
  .execute(destination, {
    headers: {
      apikey: 'IXNpKAZJF5wD01NpTtlER3GqA2yhb4sy'
    }
  })
  .then(r => {
    console.log(JSON.stringify(r.data, null, 2));
  })
  .catch(e => {
    console.log(e);
  });

// V2 GETBYKEY
console.log(
  v2()
    .service('sap/opu/odata/sap/API_BUSINESS_PARTNER')
    .entitySet('A_BusinessPartner')
    .getByKey({
      BusinessPartner: '1018'
    })
    .url(destination)
);

// V2 CREATE
console.log(
  v2()
    .service('sap/opu/odata/sap/API_BUSINESS_PARTNER')
    .entitySet('A_BusinessPartner')
    .create({
      BusinessPartner: '1018',
      FirstName: 'Peter'
    })
    .url(destination)
);

// V2 UPDATE
console.log(
  v2()
    .service('sap/opu/odata/sap/API_BUSINESS_PARTNER')
    .entitySet('A_BusinessPartner')
    .update({
      BusinessPartner: '1018',
      FirstName: 'Peter'
    })
    .ignoreETag()
    .eTag('TAG')
    .url(destination)
);

console.log(
  v4()
    .service('path/to/v4/service')
    .entitySet('someEntity')
    .getAll()
    .select('Peter', '3', 'Meter')
    .url()
);
