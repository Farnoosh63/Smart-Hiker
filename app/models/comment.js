import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  time: DS.attr(),
  userName: DS.attr(),
  description: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
