import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 'facebook', text: 'Facebook' },
      { id: 'netflix', text: 'Netflix' },
      { id: 'yahoo', text: 'Yahoo' },
      { id: 'ember.js', text: 'Ember.js' },
    ];
  }
});
