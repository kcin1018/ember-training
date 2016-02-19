import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('it works', function(assert) {
  const Type = Ember.Object.extend({
    item: 'item',
    list: [],
    isItemInList: isInArray('item', 'list')
  });

  const obj = Type.create();
  assert.equal(obj.get('isItemInList'), false, 'Item `item` is not in list');

  obj.get('list').addObject('item');
  assert.equal(obj.get('isItemInList'), true, 'Item `item` is now in list');

  obj.get('list').addObject('item2');
  assert.equal(obj.get('isItemInList'), true, 'Item `item` is still in list');

  obj.get('list').removeObject('item');
  assert.equal(obj.get('isItemInList'), false, 'Item `item` has been removed from the list');

  obj.set('item', 'not-in-list');
  assert.equal(obj.get('isItemInList'), false, 'Item `not-in-list` is not in the list');

  obj.set('item', 'item2');
  assert.equal(obj.get('isItemInList'), true, 'Item `item2` is in the list');

  obj.set('list', ['item', 'bleh', 'test']);
  assert.equal(obj.get('isItemInList'), false, 'Item `item2` is not in the list');
});
