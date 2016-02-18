import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1234, text: 'This is a test issue' },
      { id: 4352, text: 'Another issue, yeah!' },
      { id: 7335, text: 'What the what?!?!?!?!' },
      { id: 4234, text: 'What a dump repository' },
      { id: 3672, text: 'Great REPO, but...' }
    ];
  }
});
