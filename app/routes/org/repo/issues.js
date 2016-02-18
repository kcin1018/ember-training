import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org').organization;
    let repo = this.modelFor('org.repo').repo;

    return $.get(`https://api.github.com/repos/${org}/${repo}/issues`);
  }
});
