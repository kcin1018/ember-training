import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),
  model() {
    return [
      { id: 'facebook', text: 'Facebook' },
      { id: 'netflix', text: 'Netflix' },
      { id: 'yahoo', text: 'Yahoo' },
      { id: 'emberjs', text: 'Ember.js' },
      { id: 'not-valid', text: 'Not Valid' }
    ];
  },
  actions: {
    favoriteToggle(org) {
      if(this.get('favorites.items').indexOf(org) === -1) {
        this.get('favorites').favorite(org);
      } else {
        this.get('favorites').unfavorite(org);
      }
    }
  }
});
