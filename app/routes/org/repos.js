import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org').organization;

    return $.get(`https://api.github.com/orgs/${org}/repos`).then((repos) => {
      return repos.map((repo) => {
        repo.oldId = repo.id;
        repo.id = repo.name;
        return repo;
      })
    });
  }
});
