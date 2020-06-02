/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { Entity } from '../entity';
import { Field, SelectableEdmTypeField } from '../../common/selectable';
// eslint-disable-next-line unused-imports/no-unused-imports-ts
import { Constructable, ComplexTypeField, EdmTypeShared } from '../../common';

/**
 * @experimental This is experimental and is subject to change. Use with caution.
 */
export class CollectionField<
  EntityT extends Entity,
  CollectionT extends typeof ComplexTypeField | EdmTypeShared<'any'>
> extends Field<EntityT> implements SelectableEdmTypeField {
  readonly selectable: true;
  constructor(
    readonly _fieldName: string,
    readonly _entityConstructor: Constructable<EntityT>,
    readonly _fieldType: CollectionT
  ) {
    super(_fieldName, _entityConstructor);
  }
}
