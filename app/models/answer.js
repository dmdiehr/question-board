import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  text: DS.attr(),
  upVotes: DS.attr(),
  downVotes: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
