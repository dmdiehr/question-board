import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question) {
      if(confirm('Forreals? RU sure?')){
        var deleteChildren = question.get('answers').map(function(answer){
          return answer.destroyRecord();
        });
        Ember.RSVP.all(deleteChildren).then(function(){
          return question.destroyRecord();
        });
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
    },
    upVoteQuestion(question){
      var newTotal = question.get('upVotes') + 1;
      this.store.findRecord('question', question.id).then(function(question){
        question.set('upVotes', newTotal);
      });
      question.save();
    },
    downVoteQuestion(question){
      var newTotal = question.get('downVotes') + 1;
      this.store.findRecord('question', question.id).then(function(question){
        question.set('downVotes', newTotal);
      });
      question.save();
    },
    upVoteAnswer(answer){
      var newTotal = answer.get('upVotes') + 1;
      this.store.findRecord('answer', answer.id).then(function(answer){
        answer.set('upVotes', newTotal);
      });
      answer.save();
    },
    downVoteAnswer(answer){
      var newTotal = answer.get('downVotes') + 1;
      this.store.findRecord('answer', answer.id).then(function(answer){
        answer.set('downVotes', newTotal);
      });
      answer.save();
    }
  }
});
