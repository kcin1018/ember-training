import { test } from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';

moduleForAcceptance('Acceptance | github ui tests');

function json(obj, status=200) {
  return [status, { 'Content-Type' : 'text/json'}, JSON.stringify(obj)];
}

test('app functions the way it is supposed to', function(assert) {
   new Pretender(function(){
     this.get('https://api.github.com/orgs/:id', () => json({
       id: 99,
       login: 'emberjs',
       name: 'Ember.js'
    }));
    this.get('https://api.github.com/orgs/:id/:repoid', () => json([{
      id: 123,
      name: 'data'
    }]));
    this.get('https://api.github.com/repos/:id/:repoid', () => json({
      id: 123,
      name: 'data'
    }));
    this.get('https://api.github.com/repos/:id/:repoid/issues', () => json([
      {id: 1, title: 'Issue 1'},
      {id: 2, title: 'Issue 2'}
    ]));
    this.get('https://api.github.com/repos/:id/:repoid/contributors', () => json([
      {id: 1, login: 'contributor1'},
      {id: 2, login: 'contributor2'}
    ]));
  });

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/orgs', 'The url should be `/orgs`');
    assert.equal(currentRouteName(), 'orgs', 'The route name should be `orgs`');
  });

  click('a[href*="org/emberjs"]');

  andThen(function() {
    assert.equal(currentURL(), '/org/emberjs/repos', 'The url should be `/org/emberjs/repos`');
    assert.equal(currentRouteName(), 'org.repos', 'The route name should be `org.repos`');
  });

  click('a[href*="org/emberjs/data"]');

  andThen(function() {
    assert.equal(currentURL(), '/org/emberjs/data/issues', 'The url should be `/org/emberjs/data/issues`');
    assert.equal(currentRouteName(), 'org.repo.issues', 'The route name should be `org.repo.issues`');

    assert.ok(find('ul li').length > 0, 'It has at a nonzero number of issues');
  });

  click('a[href*="org/emberjs/data/contributors"]');

  andThen(function() {
    assert.equal(currentURL(), '/org/emberjs/data/contributors', 'The url should be `/org/emberjs/data/contributors`');
    assert.equal(currentRouteName(), 'org.repo.contributors', 'The route name should be `org.repo.contributors`');

    assert.ok(find('ul li').length > 0, 'It has at a nonzero number of contributors');
  });

});
