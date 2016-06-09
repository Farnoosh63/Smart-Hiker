import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        comment.destroyRecord();
      }

    },
    update(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      // this.sendAction('update', comment, params);
    }
  }
});
