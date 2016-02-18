import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, text: 'Bruce Wayne' },
      { id: 2, text: 'Clark Kent' },
      { id: 3, text: 'James Gordon' },
      { id: 4, text: 'Peter Parker' },
      { id: 5, text: 'Kurt Wagner' }
    ];
  }
});
