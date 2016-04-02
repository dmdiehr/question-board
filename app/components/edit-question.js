import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    editQuestion(question){
      // passing params unnecessary if you sync the input value
      // to the model itself.

      // var params = {
      //   title: this.get('title'),
      //   body: this.get('body'),
      //   author: this.get('author')
      // };

      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', question);
    },
    deleteQuestion(question){
      this.sendAction('deleteQuestion', question)
    }
  }

});
