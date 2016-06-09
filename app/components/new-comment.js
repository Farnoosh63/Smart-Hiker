import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment : false,
  actions: {
    commentFormShow(){
      this.set("addNewComment", true);
    },
    save1(){
      var params= {
        userName: this.get('userName'),
        time: this.get('time'),
        description: this.get('description'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('save2', params);
    }
  }
});
