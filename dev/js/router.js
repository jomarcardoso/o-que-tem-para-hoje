var app = app || {};

app.Routers = Backbone.Router.extend({
  routes: {
    '': 'home',
    'fiestas': 'fiestas',
    'fiestas/:id': 'detalhe',
    'perfil': 'perfil'
  },

  // home: function() {
  //   router.on('route:home', function() {
  //     BannerController(this.data.banners);
  //   });
  // },

  detalhe: function(id) {
    window.eventoId = id;
  }
});
