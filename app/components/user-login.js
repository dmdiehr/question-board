import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service(),

  actions: {
    saveUser(){
      var newName = this.get('nameInput');
      this.get('userName').setName(newName);
    }
  }
});
