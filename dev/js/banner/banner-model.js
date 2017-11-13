app.Models.Banner = Backbone.Model.extend({

  defaults: {
    id: null,
    nome: null,
    descricao: null,
    img: null
  },
  // localStorage: new Backbone.LocalStorage('banners'),

  initialize: function() {
  }

})
