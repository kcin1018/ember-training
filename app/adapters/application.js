import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch(modelName) {
      case 'org':
        return `${this.get('host')}/orgs/${query.name}`;
      case 'repo':
        return `${this.get('host')}/orgs/${query.name}/${query.repo}`;
      default:
        return this._super(...arguments);
    }
  },
  urlForQuery(query, modelName) {
    switch(modelName) {
      case 'repo':
        return `${this.get('host')}/orgs/${query.login}/repos`;
      default:
        return this._super(...arguments);
    }
  }
});
