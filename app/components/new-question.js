import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newQuestionForm() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
        author: this.get('author') ? this.get('author') : "Anonymous"
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
