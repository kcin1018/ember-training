import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  favorite(org) {
    if(this.get('items').indexOf(org) === -1) {
      this.get('items').addObject(org);
    } else {
      this.get('items').popObject(org);
    }
    console.log(this.get('items').join(','));
  }
});
