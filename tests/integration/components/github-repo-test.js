import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{github-repo}}`);

  assert.equal(this.$().text().trim(), 'Forks: ,\n    Watchers:');

  // Template block usage:"
  this.render(hbs`
    {{#github-repo}}
      template block text
    {{/github-repo}}
  `);

  assert.equal(this.$().text().trim(), 'Forks: ,\n    Watchers:');
});

test('setting objects modfies the component', function(assert) {
  assert.expect(2);

  const repo = Ember.Object.create({
    id: 'test-repo',
    forks_count: 32,
    watchers_count: 10,
  });
  this.set('repo', repo);
  this.render(hbs`{{github-repo repo=repo}}`);

  assert.equal(this.$().text().trim(), 'test-repo\n\n\n    Forks: 32,\n    Watchers: 10', 'It renders the component with the correct text');
  assert.equal(this.$('.repository a').text(), 'test-repo', 'The link has the repository name');
});
