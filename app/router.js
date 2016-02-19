import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs');
  this.route('org', { path: 'org/:organization' }, function() {
    this.route('repos');
    this.route('repo', { path: ':repo' }, function() {
      this.route('issues');
      this.route('contributors');
    });
    this.route('notfound');
  });
  this.route('notfound', { path: '*path' });
});

export default Router;
