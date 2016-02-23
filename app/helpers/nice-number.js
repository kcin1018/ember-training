import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  if(Ember.isEmpty(params)) {
    return '';
  }

  const [number] = params;
  if(number < 1000) {
    return number;
  }

  return `${Math.round(number / 100) / 10}K`;
}

export default Ember.Helper.helper(niceNumber);
