import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  avatar_url: attr('string'),
  login: attr('string'),
  name: attr('string')
});
