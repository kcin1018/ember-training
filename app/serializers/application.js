import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let resource = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);

    if(requestType === 'query') {
      payload = payload.map((rawItem) => {
        rawItem.oldId = rawItem.id;
        rawItem.id = rawItem.login || rawItem.name;
        return rawItem;
      });
    } else if(requestType === 'queryRecord') {
      payload.oldId = payload.id;
      payload.id = payload.login || payload.name;
    }

    return this._super(store, primaryModelClass, { [`${resource}`]: payload }, id, requestType);
  }
});
