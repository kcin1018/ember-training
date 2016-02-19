import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.organization}`).then((org) => {
      org.oldId = org.id;
      org.id = org.name;
      return org;
    })
  },
  actions: {
    error(jqXhr, transition, route) {
      if(jqXhr.status === 404) {
        this.intermediateTransitionTo('org.not-found');
      }
    }
  }
});
