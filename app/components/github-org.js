import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  tagName: 'li',
  isFavorited: isInArray('org.id', 'favorites.items'),
  actions: {
    favorite(id) {
      this.sendAction('on-favorite-clicked', id);
    }
  }
});
