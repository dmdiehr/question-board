import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    editQuestion(question){
      console.log(question)
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author')
      };
      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', question, params);
    }
  }

});
