import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  log() {
    console.log(this.get('items').join(','));
  },
  favorite(org) {
    this.get('items').addObject(org);
    this.log();
  },
  unfavorite(org) {
    this.get('items').removeObject(org);
    this.log();
  }
});
