import Ember from 'ember';

export default Ember.Service.extend({
  name: "",
  signedIn: Ember.computed('name', function(){
    if(this.get('name')!==''){
      return true;
    }
    else {
      return false
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

  setName(newName){
    if(newName!=undefined)
    {
      this.set('name', newName);
    }
  }
});
