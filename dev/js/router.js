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
  },

  data: {
    banners: [
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_ingressos_1100x430px-2.jpg'
      },
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banner-home.jpg'
      },
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_1100x160px.jpg'
      },
      {
        nome: 'oktoberfest',
        descricao: 'uma festa bem legal',
        img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Oktoberfest_Site_banners_1100x430px2-2.jpg'
      }
    ]
  }
});
