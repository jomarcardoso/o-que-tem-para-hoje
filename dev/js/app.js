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

  initialize: function() {
    let self = this;

    router.on('route:home', function() {
      // banner

      var bannerVi = new app.Views.Banner()
      self.$el.prepend(bannerVi.render().$el)
      bannerVi.renderChilds();
      scroller()
    })
  }
})

app.Views.Main = Backbone.View.extend({

  el: 'main',

  initialize: function() {
    let self = this;
    router.on('route:home', function() {
      var prateleiraView = new app.Views.Prateleira()
      self.$el.prepend(prateleiraView.render().$el)
      prateleiraView.renderChilds();
    })
  }
})
