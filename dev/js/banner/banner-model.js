app.Models.Banner = Backbone.Model.extend({

  defaults: {
    id: null,
    nome: null,
    descricao: null,
    img: null
  },
  // localStorage: new Backbone.LocalStorage('banners'),

  initialize: function(dados) {
    if(dados.id) {
      console.log('passou aq')
      this.set(window.todosEventos.eventos.filter(function(x) {
        if(x.id == dados.id) {
          return x
        }
      })[0])
    }
  }

})
