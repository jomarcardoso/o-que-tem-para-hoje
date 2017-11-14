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

    Backbone.history.start();
  }

})
var app = new App();

app.Views.Header = Backbone.View.extend({
  el: 'header',

  bannerView: null,

  initialize: function() {
    let self = this;

    router.on('route:home', function() {
      // banner
      // if(!self.bannerView) {
      //
      //   self.bannerView = new app.Views.Banner()
      // }
      self.bannerView = new app.Views.Banner()
      self.$el.prepend(self.bannerView.render().$el)
      self.bannerView.renderChilds();
      scroller()
    })

    router.on('route:fiestas', function() {
      self.bannerView.remove()
    })
  }
})



app.Views.Main = Backbone.View.extend({

  el: 'main',

  prateleiraView: null,

  initialize: function() {
    let self = this;

    router.on('route:home', function() {
      self.prateleiraView = new app.Views.Prateleira()
      self.$el.prepend(self.prateleiraView.render().$el)
      self.prateleiraView.renderChilds();
    })

    router.on('route:fiestas', function() {
      self.prateleiraView.remove()
    })
  }
})
