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
    }
  }
});
