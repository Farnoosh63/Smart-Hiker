import Ember from 'ember';

export default Ember.Component.extend({
  editComment: false,
  actions: {
    editCommentFormShow() {
      this.set('editComment', true);
    },
    update(comment) {
      var params = {
        userName: this.get('userName'),
        time: this.get('time'),
        description: this.get('description'),
      };
      this.set('editComment', false);
      this.sendAction('update', comment, params);
    }
  }
});
