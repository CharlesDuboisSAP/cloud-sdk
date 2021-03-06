/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import {
  testEntityKeyPropGuid,
  testEntityKeyPropString,
  testEntityMultiLinkKeyProp
} from '../keys';
import { changesetHeader, changesetRequestHeader } from './header';

export const createTestEntity = [
  ...changesetHeader(),
  '',
  'POST /sap/opu/odata/sap/API_TEST_SRV/A_TestEntity HTTP/1\\.1',
  ...changesetRequestHeader(),
  '',
  '',
  '{"StringProperty":"stringProp","Int16Property":16,"BooleanProperty":false}',
  ''
];

const createTestEntityMultiLinkAsChildOfTestEntity = [
  ...changesetHeader(),
  '',
  `POST /sap/opu/odata/sap/API_TEST_SRV/A_TestEntity\\(KeyPropertyGuid=guid'\\${testEntityKeyPropGuid}',KeyPropertyString='\\${testEntityKeyPropString}'\\).to_MultiLink HTTP/1\\.1`,
  ...changesetRequestHeader(),
  '',
  '',
  '{"StringProperty":"multiLinkStringProp"}',
  ''
];

const patchTestEntityMultiLink = [
  ...changesetHeader(),
  '',
  `PATCH /sap/opu/odata/sap/API_TEST_SRV/A_TestEntityMultiLink\\(KeyProperty='\\${testEntityMultiLinkKeyProp}'\\) HTTP/1\\.1`,
  ...changesetRequestHeader(),
  '',
  '',
  '{"StringProperty":"multiLinkStringProp"}',
  ''
];

const putTestEntity = [
  ...changesetHeader(),
  '',
  `PUT /sap/opu/odata/sap/API_TEST_SRV/A_TestEntity\\(KeyPropertyGuid=guid'\\${testEntityKeyPropGuid}',KeyPropertyString='\\${testEntityKeyPropString}'\\) HTTP/1\\.1`,
  ...changesetRequestHeader(),
  '',
  '',
  `{"KeyPropertyGuid":"\\${testEntityKeyPropGuid}","KeyPropertyString":"\\${testEntityKeyPropString}","StringProperty":"newStringProp"}`,
  ''
];

const deleteTestEntity = [
  ...changesetHeader(),
  '',
  `DELETE /sap/opu/odata/sap/API_TEST_SRV/A_TestEntity\\(KeyPropertyGuid=guid'\\${testEntityKeyPropGuid}',KeyPropertyString='\\${testEntityKeyPropString}'\\) HTTP/1\\.1`,
  ...changesetRequestHeader(),
  'If-Match: \\*',
  '',
  '',
  ''
];

export const singleChangesetRequest = [
  'Content-Type: multipart/mixed; boundary=changeset_.*',
  '',
  '--changeset_.*',
  ...createTestEntity,
  '--changeset_.*'
];

export const multiChangesetRequest = [
  'Content-Type: multipart/mixed; boundary=changeset_.*',
  '',
  '--changeset_.*',
  ...createTestEntityMultiLinkAsChildOfTestEntity,
  '--changeset_.*',
  ...patchTestEntityMultiLink,
  '--changeset_.*',
  ...putTestEntity,
  '--changeset_.*',
  ...deleteTestEntity,
  '--changeset_.*'
];
