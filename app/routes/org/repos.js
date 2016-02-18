import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 'data', text: 'data' },
      { id: 'website', text: 'website' },
      { id: 'guides', text: 'guides' },
      { id: 'ember.js', text: 'ember.js' },
      { id: 'rfcs', text: 'rfcs' },
    ];
  }
});
