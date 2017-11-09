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
