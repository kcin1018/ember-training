import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.get(`https://api.github.com/orgs/${params.organization}`).then((org) => {
      org.oldId = org.id;
      org.id = org.name;
      return org;
    });
  },
  actions: {
    error(jqXhr/*, transition, route*/) {
      if(jqXhr.status === 404) {
        // if 404 then handle it differently
        this.intermediateTransitionTo('org.notfound');
      } else {
        // bubble up to the default error state
        return true;
      }
    }
  }
});
