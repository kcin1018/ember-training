import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org').get('login');

    return this.store.query('repo', {login: org});
  }
});
