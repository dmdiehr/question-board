import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  timestamp: DS.attr(),
  upVotes: DS.attr(),
  downVotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  score: Ember.computed('upVotes', 'downVotes', function(){
    return (this.get('upVotes') - this.get('downVotes'));
  })
});
