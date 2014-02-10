ContactManager.Models.Contact = Backbone.Model.extend({
	defaults: {
    name: null,
    tel: '+380-...',
    email: 'change@me.com',
    avatar: null
  },

  initialize: function() {
    this.set('avatar', _.random(1, 15) + '.jpg');
  }
});