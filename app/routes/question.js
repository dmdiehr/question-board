import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question) {
      if(confirm('Forreals? RU sure?')){
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    dontEdit() {
      //this is very hacky, there's got to be a better way to do this.
       window.location.reload(true);
    },
    editQuestion(question) {

      // Only needed if being passed params
      // Object.keys(params).forEach(function(key) {
      //   if(params[key]!==undefined) {
      //     question.set(key,params[key]);
      //   }
      // });
      question.save();
    }
  }
});
