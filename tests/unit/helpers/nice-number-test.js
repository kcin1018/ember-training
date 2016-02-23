import { niceNumber } from 'github-ui/helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(niceNumber([]), '', 'it returns an empty string');
  assert.equal(niceNumber([-1]), -1, 'it returns -1 from -1');
  assert.equal(niceNumber([42]), 42, 'it returns 42 from 42');
  assert.equal(niceNumber([999]), 999, 'it returns 999 from 999');
  assert.equal(niceNumber([1200]), '1.2K', 'it returns 1.2K from 1200');
  assert.equal(niceNumber([23500]), '23.5K', 'it returns 23.5K from 23500');
  assert.equal(niceNumber([235030]), '235K', 'it returns 235K from 235030');
  assert.equal(niceNumber([53670]), '53.7K', 'it returns 53.7K from 53670');
});
