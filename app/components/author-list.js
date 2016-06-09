import Ember from 'ember';

export default Ember.Component.extend({
  showAuthorList : false,
  uniqueAuthors: Ember.computed('posts.[]', function() {
    var authorArray = [];
    this.get('posts').forEach(function(post) {
      if(authorArray.indexOf(post.get('author'))=== -1){
        authorArray.push(post.get('author'));
      }
    });
    // this.set("showAuthorList", true);

    console.log(authorArray);
    return authorArray;
  }),

  actions: {
    // getAuthor(posts){
    //
    //   this.sendAction('authorArray', posts);
    // }
  }
});
