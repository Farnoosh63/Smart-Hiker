import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
