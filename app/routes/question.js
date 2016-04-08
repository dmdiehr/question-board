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
    dontEdit() {
       window.location.reload(true);
    },
    editQuestion(question) {
      question.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question');
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    }
  }
});
