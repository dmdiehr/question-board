import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer){
      this.sendAction('deleteAnswer', answer);
    },
    upVoteAnswer(answer){
      this.sendAction('upVoteAnswer', answer);
    },
    downVoteAnswer(answer){
      this.sendAction('downVoteAnswer', answer);
    }
  }
});
