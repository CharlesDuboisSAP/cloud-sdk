/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { prependPrefix, stripPrefix } from '../src/internal-prefix';

describe('internal-prefix', () => {
  describe('prependPrefix', () => {
    it('prepends the prefix if not present', () => {
      expect(prependPrefix('test')).toBe('_test');
      expect(prependPrefix('_test')).toBe('_test');
    });
  });

  describe('stripPrefix', () => {
    it('strips the prefix if present', () => {
      expect(stripPrefix('test')).toBe('test');
      expect(stripPrefix('_test')).toBe('test');
    });
  });
});
