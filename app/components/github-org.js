import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  tagName: 'li',
  actions: {
    favorite(org) {
      this.get('favorites').favorite(org);
    }
  }
});
