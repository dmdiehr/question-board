import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  upVotes: DS.attr(),
  downVotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
