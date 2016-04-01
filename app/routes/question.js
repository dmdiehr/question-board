import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question) {
      if(confirm('Forreals? RU sure?')){
        question.destroyRecord();
        this.transitionTo('index');
      }
    },

    editQuestion(question, params) {
      console.log(question);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      // this.transitionTo('index');
    }
  }
});
