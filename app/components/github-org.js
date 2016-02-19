import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    favorite(id) {
      this.sendAction('on-favorite-clicked', id);
    }
  }
});
