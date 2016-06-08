import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        name: this.get('name'),
        author: this.get('author'),
        date: "temporary",
        text: this.get('text'),
        image: this.get('image'),
      };
        this.set('addNewPost', false);
        this.sendAction('savePost', params);
      }
  }
});
