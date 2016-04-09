import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    dontEdit(){
      this.sendAction('dontEdit');
    },
    editQuestion(question){
      this.sendAction('editQuestion', question);
    },
    deleteAnswer(answer){
      this.sendAction('deleteAnswer', answer);
    },
    upVoteQuestion(question){
      this.sendAction('upVoteQuestion', question);
    },
    downVoteQuestion(question){
      this.sendAction('downVoteQuestion', question);
    },
    upVoteAnswer(answer){
      this.sendAction('upVoteAnswer', answer);
    },
    downVoteAnswer(answer){
      this.sendAction('downVoteAnswer', answer);
    }
  }
});
