import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  const [number] = params;

  if(number < 1000) {
    return number;
  }

  return `${Math.round(number / 100) / 10}K`;
}

export default Ember.Helper.helper(niceNumber);
