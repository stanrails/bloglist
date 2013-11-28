Posts = new Meteor.Collection('posts');
Posts.allow({
  update: ownsDocument,
  remove: ownsDocument
});
Posts.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});