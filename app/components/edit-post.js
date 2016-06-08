import Ember from 'ember';

export default Ember.Component.extend({
  editPost: false,
  actions: {
    postFormShow() {
      this.set('editPost', true);
    },
    savePost(post) {
      var params = {
        name: this.get('name'),
        author: this.get('author'),
        date: this.get('date'),
        text: this.get('text'),
        image: this.get('image'),
      };
        this.set('editPost', false);
        this.sendAction('updatePost',post, params);
      }
  }
});
