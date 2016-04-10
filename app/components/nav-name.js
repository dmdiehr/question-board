import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service(),

  actions: {
    requestSignOut(){
      this.get('userName').signOut();
    },
    requestSignIn(){
      this.get('userName').requestTrue();
    }
  }
});
