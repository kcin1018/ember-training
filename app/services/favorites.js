import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  favorite(org) {
    this.get('items').addObject(org);
    console.log(this.get('items').join(','));
  }
});
