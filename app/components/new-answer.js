import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service(),
  addNewAnswer: false,
  actions: {
    newAnswerForm() {
      this.set('addNewAnswer', true);
      this.set('text', "");
      this.set('author', "");
    },

    saveAnswer() {
      var params = {
        text: this.get('text') ? this.get('text') : "",
        author: this.get('author') ? this.get('author') : "Anonymous",
        question: this.get('question'),
        timestamp: Date.now(),
        downVotes: 0,
        upVotes: 0
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
