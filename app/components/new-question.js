import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service(),
  addNewQuestion: false,
  actions: {
    newQuestionForm() {
      this.set('addNewQuestion', true);
    },
    dontSaveQuestion(){
      this.set('title', "");
      this.set('body', "");
      this.set('addNewQuestion', false);
    },
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
        author: this.get('author') ? this.get('author') : "Anonymous",
        timestamp: Date.now(),
        downVotes: 0,
        upVotes: 0
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
