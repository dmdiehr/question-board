import Ember from 'ember';

export default Ember.Service.extend({
  name: "",
  request: false,
  signedIn: Ember.computed('name', function(){
    if(this.get('name')!==''){
      return true;
    }
    else {
      return false;
    }
  }),
  isAdmin: Ember.computed('name', function(){

    if(this.get('name').toLowerCase()==='admin'){
      return true;
    }
    else {
      return false;
    }
  }),
  requestTrue(){
    this.set('request', true);
  },
  requestFalse(){
    this.set('request', false);
  },
  signOut(){
    this.set('name', "");
  },
  setName(newName){
    if(newName!=undefined)
    {
      this.set('name', newName);
    }
  }
});
