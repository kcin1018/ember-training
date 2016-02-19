import Ember from 'ember';

const { computed } = Ember;

export default function isInArray(itemKey, listKey) {
  return computed(itemKey, `${listKey}.[]`, {
    get() {
      return this.get(listKey).indexOf(this.get(itemKey)) !== -1;
    }
  });
}
