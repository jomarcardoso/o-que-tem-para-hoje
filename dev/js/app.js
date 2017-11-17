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
  bannerEstatic: null,

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
    self.$el.append(self.bannerEstatic.render().$el)
    self.bannerEstatic.renderChilds();
    scroller()
  }
})



app.Views.Main = Backbone.View.extend({

  el: 'main',

  prateleirasView: [],

  initialize: function() {
    let self = this;
    this.self = this;

    router.on('route:home', function() {

      var filtro = {}

      filtro.tipo = 'festa'
      let prateleira1 = new app.Views.Prateleira(filtro)
      self.$el.prepend(prateleira1.render().$el)
      prateleira1.renderChilds();
      self.prateleirasView.push(prateleira1)


      filtro.tipo = 'teatro'
      let prateleira2 = new app.Views.Prateleira(filtro)
      self.$el.prepend(prateleira2.render().$el)
      prateleira2.renderChilds();
      self.prateleirasView.push(prateleira2)

      filtro.tipo = 'show'
      let prateleira3 = new app.Views.Prateleira(filtro)
      self.$el.prepend(prateleira3.render().$el)
      prateleira3.renderChilds();
      self.prateleirasView.push(prateleira3)


    })

    // router.on('route:fiestas', function() {
    //   self.prateleiraView.remove()
    // })
  },

  paginaDetalhe: function(model) {
    self = this
    if(self.prateleirasView.length > 0) {
      self.prateleirasView.forEach(x => x.remove())
    }
    // self.detalhe = new App.View.Detalhe()
  }
})
