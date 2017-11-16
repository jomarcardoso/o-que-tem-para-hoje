window.App = Backbone.View.extend({
  Models: {},
  Collections: {},
  Views: {},
  Routers: function(){},

  el: '.container',

  initialize: function() {

  },

  start: function(data) {

    router = new this.Routers(data)
    header = new this.Views.Header({router: router})
    main = new this.Views.Main({router: router})

    window.stade = '';
    window.eventoId = '';

    $('#o-que-tem-para-hoje').on('click', function() {
      Backbone.history.navigate('', {trigger: true})
    })



    router.on('route:detalhe', function() {
      var model = new app.Models.Detalhe({id: window.eventoId})
      header.paginaDetalhe(model);
      main.paginaDetalhe(model);
    })

    Backbone.history.start();
  }

})
var app = new App();

app.Views.Header = Backbone.View.extend({
  el: 'header',

  bannerCarousel: null,

  initialize: function() {
    let self = this;

    router.on('route:home', function() {

      if(self.bannerEstatic) {
        self.bannerEstatic.remove()
      }
      self.bannerCarousel = new app.Views.Banner({collection: true})
      self.$el.prepend(self.bannerCarousel.render().$el)
      self.bannerCarousel.renderChilds();
      self.bannerCarousel.carrossel();
      scroller()
    })

    router.on('route:fiestas', function() {
      if(self.bannerCarousel) {
        self.bannerCarousel.remove()
      }
    })

    // router.on('route:detalhe', function() {
      // if(self.bannerCarousel) {
      //   self.bannerCarousel.remove()
      // }
      // self.bannerEstatic = new app.Views.Banner({model: true})
      // self.$el.prepend(self.bannerEstatic.render().$el)
      // self.bannerEstatic.renderChilds();
      // scroller()
      // console.log('oi')
    // })
  },

  paginaDetalhe: function(model) {
    let self = this;
    if(self.bannerCarousel) {
      self.bannerCarousel.remove()
    }
    self.bannerEstatic = new app.Views.Banner({model: model})
    self.$el.prepend(self.bannerEstatic.render().$el)
    self.bannerEstatic.renderChilds();
    scroller()
  }
})



app.Views.Main = Backbone.View.extend({

  el: 'main',

  prateleiraView: null,

  initialize: function() {
    let self = this;
    this.self = this;

    router.on('route:home', function() {
      self.prateleiraView = new app.Views.Prateleira()
      self.$el.prepend(self.prateleiraView.render().$el)
      self.prateleiraView.renderChilds();
    })

    // router.on('route:fiestas', function() {
    //   self.prateleiraView.remove()
    // })
  },

  paginaDetalhe: function(model) {
    if(this.self.prateleiraView) {
      this.self.prateleiraView.remove()
    }
  }
})



window.prateleiras = {
  titulo: 'As festas mais próximas',
  prateleiras: [
    {
      id: 1,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_ingressos_1100x430px-2.jpg'
    },
    {
      id: 2,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banner-home.jpg'
    },
    {
      id: 3,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_1100x160px.jpg'
    },
    {
      id: 4,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Oktoberfest_Site_banners_1100x430px2-2.jpg'
    }
  ]
}

window.prateleiras = {
  titulo: 'As festas mais próximas',
  prateleiras: [
    {
      id: 1,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_ingressos_1100x430px-2.jpg'
    },
    {
      id: 2,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banner-home.jpg'
    },
    {
      id: 3,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_1100x160px.jpg'
    },
    {
      id: 4,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Oktoberfest_Site_banners_1100x430px2-2.jpg'
    }
  ]
}


window.todosEventos = {
  eventos: [
    {
      id: 1,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_ingressos_1100x430px-2.jpg'
    },
    {
      id: 2,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banner-home.jpg'
    },
    {
      id: 3,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Banners_1100x160px.jpg'
    },
    {
      id: 4,
      nome: 'oktoberfest',
      descricao: 'uma festa bem legal',
      img: 'http://www.oktoberfest.org.br/wp-content/uploads/2015/10/Oktoberfest_Site_banners_1100x430px2-2.jpg'
    }
  ]
}
