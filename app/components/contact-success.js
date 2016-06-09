import Ember from 'ember';

export default Ember.Component.extend({

  formForSuccess: false,
  actions: {
    contactSuccess() {
      this.set('formForSuccess', true);

    }
  }
});
