import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service(),
  showForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    hideEditForm(){
      this.set('editQuestionForm', false);
      this.sendAction('dontEdit');
    },
    editQuestion(question){
      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', question);
    },
    deleteQuestion(question){
      this.sendAction('deleteQuestion', question);
    }
  }

});
