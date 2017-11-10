window.App = Backbone.View.extend({
  Models: {},
  Collections: {},
  Views: {},
  Routers: function(){},

  el: '.container',

  initialize: function() {
    console.log(this.el)
  },

  start: function(data) {
    router = new this.Routers(data);

    header = new this.Views.Header({router: router});
    // header.render()

    // var bannerVi = new app.Views.Banner()
    // var html = bannerVi.render().el
    //
    // $('header').prepend(html)

    Backbone.history.start();
  }

})
var app = new App();

app.Views.Header = Backbone.View.extend({

  template: _.template($('#header__banner').html()),
  el: 'header',

  render: function(html) {
    var html = this.template();
    this.$el.prepend(html);
    return this;

  },

  initialize: function() {
    self = this;
    router.on('route:home', function() {
      var bannerVi = new app.Views.Banner({container: self.$el})
      // bannerVi.render(self.$el)
      // var html = bannerVi.render().$el
      // self.$el.prepend(html)
      // $('header').prepend(html)
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

      // self.template.prepend(bannerVi.render().$el)
      // self.render(html);
    })
  }
})





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
