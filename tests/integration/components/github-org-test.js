import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{github-org}}`);

  assert.equal(this.$().text().trim(), '[ Favorite ]', 'Initial render of component');

  // Template block usage:"
  this.render(hbs`
    {{#github-org}}
      template block text
    {{/github-org}}
  `);

  assert.equal(this.$().text().trim(), '[ Favorite ]', 'Initial render of component in block syntax');
});

test('setting objects modfies the component', function(assert) {
  assert.expect(2);

  const org = Ember.Object.create({
    id: 'test-org',
    text: 'Test Org'
  });
  this.set('org', org);
  this.render(hbs`{{github-org org=org}}`);

  assert.equal(this.$().text().trim(), '[ Favorite ]\n\nTest Org', 'It renders the component with an organization');
  assert.equal(this.$('.organization a').text(), 'Test Org', 'The link has the organization name');
});

test('clicking the favorite button fires action', function(assert) {
  assert.expect(2);

  const org = Ember.Object.create({
    id: 'test-org',
    text: 'Test Org'
  });

  this.on('favoriteToggle', () => {
    console.log(this.get('org.isFavorited'));
    this.set('org.isFavorited', !this.get('org.isFavorited'));
    console.log(this.get('org.isFavorited'));
  });

  this.set('org', org);
  this.render(hbs`{{github-org org=org on-favorite-clicked='favoriteToggle'}}`);

  let actionCount = 0;
  this.on('favoriteToggle', function() {
    actionCount++;
  });

  this.$('.favorite-btn').click();
  assert.equal(actionCount, 1, 'The action was called once');
  // assert.equal(this.$('.favorite-btn').text().trim(), '[ Unfavorite ]', 'It changes the text of the favorite button on click');

  this.$('.favorite-btn').click();
  assert.equal(actionCount, 2, 'The action was called a second time');
  // assert.equal(this.$('.favorite-btn').text().trim(), '[ Favorite ]', 'It changes the text of the favorite button back on a second click');
});
