window.Manage = {
  Models: {},
  Collections: {},
  Views: {},
  Router: function(){},

  start: function(data) {
    router = new Manage.Router();

    router.on('route:home', function() {
      BannerController(data.banners);
    });

    Backbone.history.start();
  }
}

var oi = Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar: null
  },

  initialize: function() {
    this.on('change', function() {
        console.log('oi')
      }
    )
  },

  validate: function(attr) {
    if(!attr.name) {
      console.log('dont do this')
    }
  },

  urlRoot : '/',

  localStorage: new Backbone.LocalStorage('books')

});
