import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.queryRecord('org', { name: params.organization });
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
