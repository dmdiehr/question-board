import Ember from 'ember';

export function textFormat(params) {
  var returnHTML = "<p>"+params[0]+"</p>";
  returnHTML = returnHTML.replace(/\n/g,'</p><p>');
  return returnHTML;
}

export default Ember.Helper.helper(textFormat);
