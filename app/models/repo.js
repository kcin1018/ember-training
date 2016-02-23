import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  name: attr('string'),
  organization: belongsTo('org'),
  forks_count: attr('number'),
  watchers_count: attr('number')
});
